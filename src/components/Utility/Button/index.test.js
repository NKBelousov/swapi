import React from "react";
import renderer from "react-test-renderer";

import Button from "./index.js";

test("Should render correctly", () => {
  const text = "Hello, World!";
  const onClick = () => {
    alert(text);
  };
  const tree = renderer
    .create(<Button onClick={onClick}>{text}</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
