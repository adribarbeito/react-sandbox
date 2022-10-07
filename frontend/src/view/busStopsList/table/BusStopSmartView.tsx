import { useTranslation } from "react-i18next";
import MemoryIcon from "@mui/icons-material/Memory";
import { Tooltip } from "@mui/material";

export default function BusStopSmartView() {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("entities.busStop.tooltips.smart")}>
      <MemoryIcon />
    </Tooltip>
  );
}
