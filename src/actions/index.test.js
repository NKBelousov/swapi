import * as actions from "./index";

import { uniq } from "lodash";

test("Every action and action creator is unique", () => {
  const ACTIONS = Object.values(actions);
  expect(ACTIONS).toHaveLength(uniq(ACTIONS).length);
});
