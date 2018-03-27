import React from "react";
import renderer from "react-test-renderer";

import Header from "./index.js";

test("Should render correctly", () => {
  const tree = renderer
    .create(
      <Header tooltip="Test">
        <h1>Children</h1>
      </Header>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
