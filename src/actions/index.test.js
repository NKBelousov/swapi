import * as people from "./people";
import * as planets from "./planets";
import { each, values } from "lodash";

test("Every action and action creator is unique", () => {
  const ACTIONS = values(people).concat(values(planets));
  const map = [];
  let result = true;
  each(ACTIONS, m => {
    if (map.indexOf(m) === -1) {
      map.push(m);
    } else {
      result = false;
    }
    expect(result).toBe(true);
  });
});
