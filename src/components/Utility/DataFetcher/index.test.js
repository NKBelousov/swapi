import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import DataFetcher from "./";
import * as Statuses from "~/constants/statuses";
import theme from "~/constants/theme";

describe("DataFetcher", () => {
  test.each(Object.values(Statuses))(
    `should render %p without crashing`,
    status => {
      const div = document.createElement("div");
      ReactDOM.render(
        <ThemeProvider theme={theme}>
          <DataFetcher
            data={{
              status,
              data: ["Test"],
            }}
            onRequest={jest.fn()}>
            {data => data}
          </DataFetcher>
        </ThemeProvider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    }
  );
});
