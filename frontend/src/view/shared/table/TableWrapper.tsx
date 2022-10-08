import React from "react";
import { Card, TableCellProps } from "@mui/material";

interface Props extends TableCellProps {
  children: React.ReactNode;
}

export default function TableWrapper({ children }: Props) {
  return <Card>{children}</Card>;
}
