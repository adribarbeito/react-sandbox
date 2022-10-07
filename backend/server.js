const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());

const cityBusStops = JSON.parse(fs.readFileSync("city/busStops.json", "utf8"));
const metropolitanBusStops = JSON.parse(
  fs.readFileSync("metropolitan/busStops.json", "utf8")
);

// METROPOLITAN ROUTE
app.get("/metropolitan/bus-stops", (req, res) => {
  setTimeout(() => {
    res.send(JSON.stringify(metropolitanBusStops));
  }, 1000);
});

// CITY ROUTE
app.get("/city/bus-stops", (req, res) => {
  setTimeout(() => {
    res.send(JSON.stringify(cityBusStops));
  }, 1500);
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
