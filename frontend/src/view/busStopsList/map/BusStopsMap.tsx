import { useEffect, useState } from "react";
import { BusStopType } from "../../../@types/busStop.type";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../modules/shared/redux/hooks";
import {
  selectSelectedBusStop,
  selectBusStops,
  setSelectedBusStop,
} from "../../../modules/busStops/busStopsSlice";

import { Map, Point } from "pigeon-maps";
import { Theme, useMediaQuery } from "@mui/material";
import BusStopMarker from "./BusStopMarker";

const defaultCenter: Point = [43.362055, -8.41233];

const BusStopsMap = () => {
  const isUpMd = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const busStops = useAppSelector(selectBusStops);
  const selectedBusStop = useAppSelector(selectSelectedBusStop);
  const dispatch = useAppDispatch();

  const [center, setCenter] = useState<Point>([43.362055, -8.41233]);

  const onSeletedBusStop = (busStop: BusStopType) => {
    dispatch(setSelectedBusStop(busStop));
  };

  useEffect(() => {
    if (selectedBusStop) {
      setCenter([
        selectedBusStop.coordinates.latitude,
        selectedBusStop.coordinates.longitude,
      ]);
    }
  }, [selectedBusStop]);

  return (
    <Map
      height={isUpMd ? 600 : 300}
      defaultCenter={defaultCenter}
      defaultZoom={14}
      center={center}
      metaWheelZoom
    >
      {busStops.map((busStop, index) => (
        <BusStopMarker
          key={`map-markers-${index}`}
          busStop={busStop}
          selectedBusStop={selectedBusStop}
          onClick={() => onSeletedBusStop(busStop)}
        />
      ))}
    </Map>
  );
};

export default BusStopsMap;
