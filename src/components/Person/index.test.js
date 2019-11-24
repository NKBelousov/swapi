import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Person from "./index";
import theme from "~/constants/theme";

describe("Person", () => {
  it(`should render without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Person />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
