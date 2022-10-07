import { useTranslation } from "react-i18next";
import { BusStopTypeType } from "../../../@types/busStop.type";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Tooltip } from "@mui/material";

type Props = {
  type: BusStopTypeType;
};

export default function BusStopIcon({ type }: Props) {
  const { t } = useTranslation();

  return (
    <Tooltip title={t(`entities.busStop.enumerators.type.${type}`)}>
      <DirectionsBusIcon color={type === "CITY" ? "error" : "info"} />
    </Tooltip>
  );
}
