import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import Header from "./index.js";
import theme from "~/constants/theme";

test("Should render correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Header tooltip="Test">
          <h1>Children</h1>
        </Header>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
