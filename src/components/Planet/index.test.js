import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Planet from "./index";
import theme from "~/constants/theme";

describe("Planet", () => {
  it(`should render without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Planet />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
