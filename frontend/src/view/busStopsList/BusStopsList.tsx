import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../modules/shared/redux/hooks";
import { fetchBusStopsDataAsync } from "../../modules/busStops/busStopsSlice";
import BusStopsMap from "./map/BusStopsMap";
import BusStopsTable from "./table/BusStopsTable";
import { Container, Grid } from "@mui/material";

export default function BusStopsList() {
  const dispatch = useAppDispatch();

  const initData = useCallback(() => {
    dispatch(fetchBusStopsDataAsync());
  }, [dispatch]);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} lg={6}>
          <BusStopsMap />
        </Grid>
        <Grid item xs={12} md={7} lg={6}>
          <BusStopsTable />
        </Grid>
      </Grid>
    </Container>
  );
}
