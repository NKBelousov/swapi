import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import Page from "./index.js";
import theme from "~/constants/theme";

test("Should render correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Page>
          <h1>Header</h1>
          <h2>Subheader</h2>
        </Page>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
