import Layout from "./view/layout/Layout";
import BusStopsList from "./view/busStopsList/BusStopsList";
import "typeface-roboto";
import ThemeProvider from "./view/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <BusStopsList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
