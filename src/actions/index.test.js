import * as films from "./films";
import * as people from "./people";
import * as planets from "./planets";
import * as starships from "./starships";

import { flatten, uniq, values } from "lodash";

test("Every action and action creator is unique", () => {
  const ACTIONS = flatten([films, planets, people, starships].map(values));
  expect(ACTIONS).toHaveLength(uniq(ACTIONS).length);
});
