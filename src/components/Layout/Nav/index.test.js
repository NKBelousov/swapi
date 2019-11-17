import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "~/constants/theme";
import Nav from "./index.js";

test("Should render correctly", () => {
  const ITEMS = [
    {
      url: "/first",
      name: "First",
    },
    {
      url: "/second",
      name: "Second",
    },
  ];
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Router>
          <Nav
            items={ITEMS}
            onPeople={alert}
            onPlanets={alert}
            onFilms={alert}
          />
        </Router>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
