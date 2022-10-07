import { useTranslation } from "react-i18next";

import { CircularProgress, Typography } from "@mui/material";
import TableRowOneCell from "./TableRowOneCell";

export default function TableRowLoading() {
  const { t } = useTranslation();

  return (
    <TableRowOneCell>
      <CircularProgress />
      <Typography variant="body1" pl={2}>
        {t("common.loading")}
      </Typography>
    </TableRowOneCell>
  );
}
