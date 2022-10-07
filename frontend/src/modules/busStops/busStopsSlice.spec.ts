import { DEFAULT_PAGE_SIZE } from "../../constants";
import busStopsReducer, { setSorter, BusStopsState } from "./busStopsSlice";

describe("busStops reducer", () => {
  const initialState: BusStopsState = {
    busStopsRaw: [
      {
        type: "CITY",
        code: "001",
        name: "Puerta Real",
        coordinates: {
          latitude: 43.370115,
          longitude: -8.39585,
        },
        smart: false,
        state: "ACTIVE",
      },
      {
        type: "CITY",
        code: "002",
        name: "Av. Marina, Callejón de la Estacada",
        coordinates: { latitude: 43.369768, longitude: -8.399365 },
        smart: false,
        state: "ACTIVE",
      },
    ],
    busStops: [
      {
        type: "CITY",
        code: "001",
        name: "Puerta Real",
        coordinates: {
          latitude: 43.370115,
          longitude: -8.39585,
        },
        smart: false,
        state: "ACTIVE",
      },
      {
        type: "CITY",
        code: "002",
        name: "Av. Marina, Callejón de la Estacada",
        coordinates: { latitude: 43.369768, longitude: -8.399365 },
        smart: false,
        state: "ACTIVE",
      },
    ],
    status: "loading",
    pagination: {
      current: 1,
      pageSize: DEFAULT_PAGE_SIZE,
    },
    sorter: {
      field: "code",
      order: "asc",
    },
  };
  it("should handle initial state", () => {
    expect(busStopsReducer(undefined, { type: "unknown" })).toEqual({
      busStopsRaw: [],
      busStops: [],
      status: "loading",
      pagination: {
        current: 1,
        pageSize: DEFAULT_PAGE_SIZE,
      },
      sorter: {
        field: "code",
        order: "asc",
      },
    });
  });

  it("should sort DESC", () => {
    const actual = busStopsReducer(
      initialState,
      setSorter({ field: "code", order: "desc" })
    );

    const manualSort = initialState.busStopsRaw.sort((a, b) => {
      if (a.code > b.code) {
        return -1;
      } else if (b.code > a.code) {
        return 1;
      } else {
        return 0;
      }
    });

    expect(actual.busStops).toEqual(manualSort);
  });
});
