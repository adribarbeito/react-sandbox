export interface BusStopType {
  type: BusStopTypeType;
  code: string;
  name: string;
  coordinates: { latitude: number; longitude: number };
  state: BusStopStateType;
  smart?: boolean;
}

const typeValues = ["CITY", "METROPOLITAN"] as const;
export type BusStopTypeType = typeof typeValues[number];

const stateValues = ["ACTIVE", "INACTIVE"] as const;
export type BusStopStateType = typeof stateValues[number];
