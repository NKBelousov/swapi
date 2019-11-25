import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Starship from "./index";
import theme from "~/constants/theme";

describe("Starship", () => {
  it(`should render without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Starship />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
