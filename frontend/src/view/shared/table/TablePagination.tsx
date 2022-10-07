import {
  LabelDisplayedRowsArgs,
  TablePagination,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { PaginationType } from "../../../@types/pagination.type";
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_LIST } from "../../../constants";

type Props = {
  pagination: PaginationType;
  onChange: { (pagination: PaginationType): void };
  total: number;
};

export default function Pagination({ pagination, onChange, total }: Props) {
  const theme = useTheme();

  const { t } = useTranslation();

  const onChangeRowsPerPage = (pageSize: number) => {
    onChange({
      current: 1,
      pageSize: pageSize || DEFAULT_PAGE_SIZE,
    });
  };

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    current: number
  ) => {
    const pageSize = Number(pagination.pageSize || DEFAULT_PAGE_SIZE);
    onChange({
      current: current + 1,
      pageSize,
    });
  };

  const { current, pageSize } = pagination;
  const labelDisplayedRows = ({ from, to, count }: LabelDisplayedRowsArgs) => {
    return t("common.table.pagination.labelDisplayedRows", { from, to, count });
  };

  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <TablePagination
      labelDisplayedRows={labelDisplayedRows}
      labelRowsPerPage={
        isSmUp ? t("common.table.pagination.labelRowsPerPage") : ""
      }
      rowsPerPageOptions={[...DEFAULT_PAGE_SIZE_LIST]}
      component="div"
      count={total}
      rowsPerPage={pageSize}
      page={current - 1}
      onPageChange={onChangePage}
      onRowsPerPageChange={(event) => onChangeRowsPerPage(+event.target.value)}
    />
  );
}
