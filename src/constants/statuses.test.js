import * as MODES from "./statuses.js";
import { each } from "lodash";

test("Every status has unique string value", () => {
  const statuses = [];
  let result = true;
  each(MODES, m => {
    if (statuses.indexOf(m) === -1) {
      statuses.push(m);
    } else {
      result = false;
    }
    expect(result).toBe(true);
  });
});
