import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { ThemeProvider } from "styled-components";

import theme from "~/constants/theme";
import * as statuses from "~/constants/statuses";
import rootReducer from "~/reducers";

import Films from "./index";

describe("Films", () => {
  let div;
  beforeEach(() => {
    div = document.createElement("div");
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  const store = createStore(rootReducer);

  Object.values(statuses).map(status => {
    it(`should render status "${status}" without crashing`, () => {
      ReactDOM.render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router>
              <Films
                data={{
                  data: [],
                  status: status,
                }}
                onRequest={jest.fn()}
              />
            </Router>
          </ThemeProvider>
        </Provider>,
        div
      );
    });
  });
});
