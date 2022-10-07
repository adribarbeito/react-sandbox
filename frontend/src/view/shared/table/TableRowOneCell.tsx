import { Box, TableCell, TableRow } from "@mui/material";

export default function TableRowOneCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TableRow>
      <TableCell colSpan={100}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight={500}
        >
          {children}
        </Box>
      </TableCell>
    </TableRow>
  );
}
