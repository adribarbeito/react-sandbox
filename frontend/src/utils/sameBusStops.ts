import { BusStopType } from "../@types/busStop.type";

export default function sameBusStops(
  busStopA: BusStopType,
  busStopB: BusStopType | undefined
) {
  return busStopA.code.trim() === busStopB?.code.trim();
}
