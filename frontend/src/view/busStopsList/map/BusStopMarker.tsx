import { BusStopType } from "../../../@types/busStop.type";
import { Marker } from "pigeon-maps";
import sameBusStops from "../../../utils/sameBusStops";

type Props = {
  busStop: BusStopType;
  selectedBusStop?: BusStopType;
  onClick: (busStop: BusStopType) => void;
};

export default function BusStopMarker({
  busStop,
  selectedBusStop,
  onClick,
}: Props) {
  const isSameBusStop = sameBusStops(busStop, selectedBusStop);
  return (
    <Marker
      color={`hsl(${isSameBusStop ? 10 : 180}deg 39% 70%)`}
      width={sameBusStops(busStop, selectedBusStop) ? 70 : 50}
      anchor={[busStop.coordinates.latitude, busStop.coordinates.longitude]}
      onClick={() => onClick(busStop)}
    />
  );
}
