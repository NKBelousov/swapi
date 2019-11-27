import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";

import * as statuses from "~/constants/statuses";
import rootReducer from "~/reducers";
import theme from "~/constants/theme";

import Starships from "./index";

describe("Starships", () => {
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
            <Starships
              data={{
                data: [],
                status: status,
              }}
              onRequest={jest.fn()}
            />
          </ThemeProvider>
        </Provider>,
        div
      );
    });
  });
});
