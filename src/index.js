import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import app from "~/reducers";
import App from "~/components/App";

const store = createStore(app);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
