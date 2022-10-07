import { BusStopType } from "../../../@types/busStop.type";
import sameBusStops from "../../../utils/sameBusStops";
import {
  TableCell,
  TableRow,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BusStopIcon from "./BusStopIcon";
import BusStopStateView from "./BusStopStateView";
import BusStopSmartView from "./BusStopSmartView";

type Props = {
  busStop: BusStopType;
  selectedBusStop?: BusStopType;
  onClick: (busStop: BusStopType) => void;
};

export default function BusStopRow({
  busStop,
  selectedBusStop,
  onClick,
}: Props) {
  const theme = useTheme();
  const isUpMd = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isUpSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <TableRow
      onClick={() => onClick(busStop)}
      hover
      sx={{
        ...(sameBusStops(busStop, selectedBusStop) && {
          background: theme.palette.grey[200],
        }),
      }}
    >
      <TableCell>
        <BusStopIcon type={busStop.type} />
      </TableCell>
      <TableCell>{busStop.code}</TableCell>
      <TableCell>{busStop.name}</TableCell>
      {isUpMd && (
        <TableCell>
          {busStop.coordinates &&
            `${busStop.coordinates.latitude.toFixed(
              6
            )} ${busStop.coordinates.longitude.toFixed(6)}`}
        </TableCell>
      )}
      <TableCell>
        <BusStopStateView state={busStop.state} />
      </TableCell>
      {isUpSm && (
        <TableCell>{busStop.smart === true && <BusStopSmartView />}</TableCell>
      )}
    </TableRow>
  );
}
