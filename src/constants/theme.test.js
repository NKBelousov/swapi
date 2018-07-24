import THEME from "./theme.js";
import { each } from "lodash";

test("Every value is unique", () => {
  const theme = [];
  let result = true;
  each(THEME, m => {
    if (theme.indexOf(m) === -1) {
      theme.push(m);
    } else {
      result = false;
    }
    expect(result).toBe(true);
  });
});
