import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import React from "react";

import { createStore } from "~/store";
import { history } from "~/reducers";
import App from "~/containers/App";
import theme from "~/constants/theme";

render(
  <Provider store={createStore()}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("app")
);
