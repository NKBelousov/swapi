import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import Preloader from "./index.js";
import theme from "~/constants/theme";

test("Should render correctly", () => {
  const text = "Preloader";
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Preloader>{text}</Preloader>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
