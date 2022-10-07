import { useTranslation } from "react-i18next";
import {
  selectSelectedBusStop,
  selectStatus,
  selectBusStops,
  setSelectedBusStop,
  setPagination,
  selectPagination,
  selectTotal,
  fetchBusStopsDataAsync,
} from "../../../modules/busStops/busStopsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../modules/shared/redux/hooks";
import {
  selectSorter,
  setSorter,
} from "../../../modules/busStops/busStopsSlice";
import { BusStopType } from "../../../@types/busStop.type";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  useMediaQuery,
} from "@mui/material";
import Pagination from "../../shared/table/TablePagination";
import { PaginationType } from "../../../@types/pagination.type";
import TableCellCustom from "../../shared/table/TableCellCustom";
import TableWrapper from "../../shared/table/TableWrapper";
import TableRowLoading from "../../shared/table/TableRowLoading";
import TableRowError from "../../shared/table/TableRowError";
import BusStopRow from "./BusStopRow";

export default function BusStopsTable() {
  const { t } = useTranslation();
  const isUpMd = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isUpSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  const busStops = useAppSelector(selectBusStops);
  const selectedBusStop = useAppSelector(selectSelectedBusStop);
  const status = useAppSelector(selectStatus);
  const pagination = useAppSelector(selectPagination);
  const total = useAppSelector(selectTotal);
  const sorter = useAppSelector(selectSorter);
  const dispatch = useAppDispatch();

  const doChangeSort = (field: string) => {
    const order =
      sorter.field === field && sorter.order === "asc" ? "desc" : "asc";

    dispatch(setSorter({ field, order }));
  };

  const doChangePagination = (pagination: PaginationType) => {
    dispatch(setPagination(pagination));
  };

  const onClickRow = (busStop: BusStopType) => {
    dispatch(setSelectedBusStop(busStop));
  };

  const onError = () => {
    dispatch(fetchBusStopsDataAsync());
  };

  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("entities.busStop.fields.type")}</TableCell>
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={total > 0}
                sorter={sorter}
                name={"code"}
                label={t("entities.busStop.fields.code")}
              />
              <TableCell>{t("entities.busStop.fields.name")}</TableCell>
              {isUpMd && (
                <TableCell>
                  {t("entities.busStop.fields.coordinates")}
                </TableCell>
              )}
              <TableCell>{t("entities.busStop.fields.state")}</TableCell>
              {isUpSm && (
                <TableCell>{t("entities.busStop.fields.smart")}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {status === "idle" &&
              busStops?.map((busStop) => (
                <BusStopRow
                  key={`busStops-${busStop.code}`}
                  busStop={busStop}
                  selectedBusStop={selectedBusStop}
                  onClick={onClickRow}
                />
              ))}
            {status === "loading" && <TableRowLoading />}
            {status === "failed" && <TableRowError onError={onError} />}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        onChange={doChangePagination}
        pagination={pagination}
        total={total}
      />
    </TableWrapper>
  );
}
