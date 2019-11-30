import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import PageNotFound from "./index";
import theme from "~/constants/theme";

describe("PageNotFound", () => {
  it(`should render without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <PageNotFound />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
