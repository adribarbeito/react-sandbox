import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BusStopStateView from "./BusStopStateView";
import { BusStopType } from "../../../@types/busStop.type";

const busStopOne: BusStopType = {
  type: "CITY",
  coordinates: {
    latitude: 53.5532316,
    longitude: 10.0087783,
  },
  state: "ACTIVE",
  code: "001",
  name: "Puerta Real",
};

test("display busStop state", async () => {
  render(<BusStopStateView state={busStopOne.state} />);

  expect(screen.getByText(/enumerators.state.active/i)).toBeInTheDocument();
});
