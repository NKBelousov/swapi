import React from "react";
import renderer from "react-test-renderer";

import Nav from "./index.js";

test.skip("Should render correctly", () => {
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
    .create(<Nav
      items={ITEMS}
      onPeople={alert}
      onPlanets={alert}
      onFilms={alert}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
