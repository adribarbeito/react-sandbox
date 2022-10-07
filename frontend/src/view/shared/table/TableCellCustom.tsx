import React from "react";
import { TableCell, TableCellProps, TableSortLabel } from "@mui/material";
import { SorterType } from "../../../@types/sorter.type";

interface Props extends TableCellProps {
  sorter: SorterType;
  onSort: (field: string) => void;
  name: string;
  label: string;
  hasRows: boolean;
}

export default function TableCellCustom({
  sorter,
  onSort,
  name,
  label,
  hasRows,
  children,
  ...rest
}: Props) {
  if (!hasRows || !onSort) {
    return <TableCell {...rest}>{children || label || ""}</TableCell>;
  }

  return (
    <TableCell
      key={name}
      sortDirection={sorter.field === name ? sorter.order : false}
    >
      <TableSortLabel
        active={sorter.field === name}
        direction={sorter.order}
        onClick={() => onSort(name)}
      >
        {children || label || ""}
      </TableSortLabel>
    </TableCell>
  );
}
