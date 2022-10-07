import { useCallback, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../modules/shared/redux/hooks";
import {
  fetchBusStopsDataAsync,
  selectStatus,
} from "../../modules/busStops/busStopsSlice";
import BusStopsMap from "./map/BusStopsMap";
import BusStopsTable from "./table/BusStopsTable";

import { useTranslation } from "react-i18next";
import { Box, Container, Grid } from "@mui/material";

export default function BusStopsList() {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectStatus);

  const { t } = useTranslation();

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
        <Grid item xs={12} md={7} lg={6} display="flex" flexDirection="column">
          <BusStopsTable />
          <Box m={3}>
            {/* {status === "idle" && <BusStopsPagination />} */}
            {status === "failed" && (
              <Box display="flex" flexDirection="column" alignItems="center">
                {/* <Box display="flex" alignItems="center" m={1}>
                <AlertIcon size="large" color={Colors.NEGATIVE_ORANGE_1000} />
                <Text ml={1}>{t("table.error.message")}</Text>
              </Box>
              <Button onClick={initData}>{t("table.error.button")}</Button> */}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
