import { useTranslation } from "react-i18next";

import { Box, Button, Typography } from "@mui/material";
import TableRowOneCell from "./TableRowOneCell";

type Props = {
  onError: () => void;
};

export default function TableRowError({ onError }: Props) {
  const { t } = useTranslation();

  return (
    <TableRowOneCell>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1" gutterBottom>
          {t("table.error.message")}
        </Typography>
        <Button variant="contained" color="error" onClick={onError}>
          {t("table.error.button")}
        </Button>
      </Box>
    </TableRowOneCell>
  );
}
