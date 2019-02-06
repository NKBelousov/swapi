import React from "react";
import renderer from "react-test-renderer";

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
    .create(<Nav items={ITEMS} onPeople={alert} onPlanets={alert} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});