import React from "react";
import { Card, TableCell, TableCellProps, TableSortLabel } from "@mui/material";
import { SorterType } from "../../../@types/sorter.type";

interface Props extends TableCellProps {
  children: React.ReactNode;
}

export default function TableWrapper({ children }: Props) {
  return <Card>{children}</Card>;
}
