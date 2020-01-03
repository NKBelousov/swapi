import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Image from "./index";
import theme from "~/constants/theme";

describe("Image", () => {
  it(`should render without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Image />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
