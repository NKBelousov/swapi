import * as MODES from "./modes.js";
import { each } from "lodash";

test("Every mode has unique string value", () => {
  const modes = [];
  let result = true;
  each(MODES, m => {
    if (modes.indexOf(m) === -1) {
      modes.push(m);
    } else {
      result = false;
    }
    expect(result).toBe(true);
  });
});
