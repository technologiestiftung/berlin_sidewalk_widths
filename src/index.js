import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";

import config from "./config";

import Store from "state/Store";
import App from "modules/App";

window.$config = config; //define global config variable
ReactDOM.render(
  <StoreProvider store={Store}>
    <>
      <App />
    </>
  </StoreProvider>,
  document.getElementById("root"),
);
