import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Person from "./index";
import theme from "~/constants/theme";

describe("Person", () => {
  it(`should render without crashing`, () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <ThemeProvider theme={theme}>
          <Person />
        </ThemeProvider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
