import React from "react";
import renderer from "react-test-renderer";

import Preloader from "./index.js";

test("Should render correctly", () => {
  const text = "Preloader";
  const tree = renderer.create(<Preloader text={text} />).toJSON();
  expect(tree).toMatchSnapshot();
});
