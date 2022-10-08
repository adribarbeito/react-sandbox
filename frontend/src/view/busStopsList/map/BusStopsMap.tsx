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

import { Map, Marker, Point } from "pigeon-maps";
import { Theme, useMediaQuery } from "@mui/material";
import sameBusStops from "../../../utils/sameBusStops";

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
      {busStops.map((busStop, index) => {
        const isSameBusStop = sameBusStops(busStop, selectedBusStop);
        return (
          <Marker
            key={`map-markers-${index}`}
            color={`hsl(${isSameBusStop ? 10 : 180}deg 39% 70%)`}
            width={isSameBusStop ? 70 : 50}
            anchor={[
              busStop.coordinates.latitude,
              busStop.coordinates.longitude,
            ]}
            onClick={() => onSeletedBusStop(busStop)}
          />
        );
      })}
    </Map>
  );
};

export default BusStopsMap;
