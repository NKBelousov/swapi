import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import Button from "./index.js";
import theme from "~/constants/theme";

test("Should render correctly", () => {
  const text = "Hello, World!";
  const onClick = () => {
    alert(text);
  };
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>{text}</Button>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
