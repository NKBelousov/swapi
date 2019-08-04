import * as films from "./films";
import * as people from "./people";
import * as planets from "./planets";
import * as spaceships from "./spaceships";

import { flatten, uniq, values } from "lodash";

test("Every action and action creator is unique", () => {
  const ACTIONS = flatten([films, planets, people, spaceships].map(values));
  expect(ACTIONS).toHaveLength(uniq(ACTIONS).length);
});
