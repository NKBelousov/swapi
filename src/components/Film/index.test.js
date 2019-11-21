import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Film from "./index";
import theme from "~/constants/theme";

describe("Film", () => {
  it(`should render without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Film />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
