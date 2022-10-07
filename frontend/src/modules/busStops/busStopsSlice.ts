import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusStopType } from "../../@types/busStop.type";
import { RootState } from "../shared/redux/store";
import paginateList from "../../utils/paginate";
import BusStopsService from "./busStopsService";
import { SorterType } from "../../@types/sorter.type";
import sameBusStops from "../../utils/sameBusStops";
import { PaginationType } from "../../@types/pagination.type";
import { DEFAULT_PAGE_SIZE } from "../../constants";

export interface BusStopsState {
  busStopsRaw: BusStopType[];
  busStops: BusStopType[];
  selectedBusStop?: BusStopType;
  status: "idle" | "loading" | "failed";
  pagination: PaginationType;
  sorter: SorterType;
}

const initialState: BusStopsState = {
  busStopsRaw: [],
  busStops: [],
  status: "loading",
  pagination: {
    current: 1,
    pageSize: DEFAULT_PAGE_SIZE,
  },
  sorter: {
    field: "code",
    order: "asc",
  },
};

//Thunks
export const fetchBusStopsDataAsync = createAsyncThunk(
  "busStops/fetchData",
  async () => {
    return BusStopsService.list();
  }
);

//Slice
export const busStopsSlice = createSlice({
  name: "busStops",
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<PaginationType>) => {
      state.pagination = action.payload;
      state.busStops = paginateList(
        state.busStopsRaw,
        action.payload.pageSize,
        action.payload.current,
        state.sorter
      );
    },
    setSorter: (state, action: PayloadAction<SorterType>) => {
      state.sorter = action.payload;
      state.busStops = paginateList(
        state.busStopsRaw,
        state.pagination.pageSize,
        state.pagination.current,
        action.payload
      );
    },
    setSelectedBusStop: (state, action: PayloadAction<BusStopType>) => {
      if (sameBusStops(action.payload, state.selectedBusStop)) {
        state.selectedBusStop = undefined;
      } else {
        state.selectedBusStop = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusStopsDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBusStopsDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.busStopsRaw = action.payload;
        state.busStops = paginateList(
          action.payload,
          state.pagination.pageSize,
          state.pagination.current,
          state.sorter
        );
      })
      .addCase(fetchBusStopsDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setPagination, setSorter, setSelectedBusStop } =
  busStopsSlice.actions;

//Selectors
export const selectBusStops = (state: RootState) => state.busStops.busStops;
export const selectTotal = (state: RootState) =>
  state.busStops.busStopsRaw.length;
export const selectSelectedBusStop = (state: RootState) =>
  state.busStops.selectedBusStop;

export const selectPagination = (state: RootState) => state.busStops.pagination;
export const selectSorter = (state: RootState) => state.busStops.sorter;

export const selectStatus = (state: RootState) => state.busStops.status;

export default busStopsSlice.reducer;
