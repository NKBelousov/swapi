import React from "react";
import renderer from "react-test-renderer";

import Page from "./index.js";

test("Should render correctly", () => {
  const tree = renderer
    .create(
      <Page>
        <h1>Header</h1>
        <h2>Subheader</h2>
      </Page>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
