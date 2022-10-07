import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import BusStopsList from "./BusStopsList";
import { renderWithProviders } from "../../utils/testUtils";

export const handlers = [
  rest.get("/city/bus-stops", (req, res, ctx) => {
    return res(
      ctx.json({
        busStops: [
          {
            code: "001",
            name: "Puerta Real",
            latitude: 43.370115,
            longitude: -8.395856447,
            smart: false,
            state: "ACTIVE",
          },
          {
            code: "002",
            name: "Av. Marina, Callejón de la Estacada",
            latitude: 43.3697686648,
            longitude: -8.399365,
            smart: false,
            state: "ACTIVE",
          },
          {
            code: "003",
            name: "Av. de la Marina, Obelisco",
            latitude: 43.368363,
            longitude: -8.4025337866,
            smart: false,
            state: "ACTIVE",
          },
          {
            code: "004",
            name: "Cantón Pequeño 25, Pza. Mina (Arenas)",
            latitude: 43.366843,
            longitude: -8.404393,
            smart: false,
            state: "ACTIVE",
          },
        ],
      }),
      ctx.delay(150)
    );
  }),
  rest.get("/metropolitan/bus-stops", (req, res, ctx) => {
    return res(
      ctx.json({
        placemarks: [
          {
            code: "X0001",
            name: "Estación de autobuses",
            coordinates: [43.353556, -8.404491],
          },
          {
            code: "X0002",
            name: "Costa Palloza 5",
            coordinates: [43.358662, -8.403509],
          },
          {
            code: "X0003",
            name: "Entrejardines",
            coordinates: [43.367348, -8.402764],
          },
          {
            code: "X0004",
            name: "Polígono A Grela",
            coordinates: [43.347249, -8.425807],
          },
        ],
      }),
      ctx.delay(350)
    );
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives busStops list", async () => {
  renderWithProviders(<BusStopsList />);

  const codes = await screen.findAllByText(/001/i);
  expect(codes.length).toBeGreaterThan(0);
});
