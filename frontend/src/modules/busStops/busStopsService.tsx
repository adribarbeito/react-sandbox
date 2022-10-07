import { BusStopType } from "../../@types/busStop.type";
import axiosInstance from "../shared/axios/axiosInstance";

interface CityData {
  busStops: [
    {
      code: string;
      name: string;
      latitude: number;
      longitude: number;
      state: "ACTIVE" | "INACTIVE";
      smart: boolean;
    }
  ];
}

interface MetropolitanData {
  placemarks: [
    {
      code: string;
      name: string;
      coordinates: number[];
    }
  ];
}

export default class BusStopsService {
  private static async listCityBusStops(): Promise<BusStopType[]> {
    const response = await axiosInstance.get<CityData>(`/city/bus-stops`);

    return response.data.busStops.map(
      ({ code, name, latitude, longitude, state, smart }) => ({
        code,
        name,
        coordinates: { latitude, longitude },
        state,
        smart,
        type: "CITY",
      })
    );
  }

  private static async listMetropolitanBusStops(): Promise<BusStopType[]> {
    const response = await axiosInstance.get<MetropolitanData>(
      `/metropolitan/bus-stops`
    );

    return response.data.placemarks.map(({ code, name, coordinates }) => ({
      code,
      name,
      coordinates: {
        latitude: coordinates[1],
        longitude: coordinates[0],
      },
      state: "ACTIVE",
      type: "METROPOLITAN",
    }));
  }

  static async list(): Promise<BusStopType[]> {
    const allBusStopsArrays = await Promise.all([
      this.listCityBusStops(),
      this.listMetropolitanBusStops(),
    ]);

    const allBusStops = allBusStopsArrays.flat(1);

    return allBusStops;
  }
}
