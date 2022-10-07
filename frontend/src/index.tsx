import "./locales/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "./modules/shared/redux/store";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
