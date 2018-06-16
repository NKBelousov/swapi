import reducer from "./index.js";

test("Returns default state when unknown action is dispatched", () => {
  const action = { type: void 0 };
  const state = reducer(void 0, { type: void 0 });
  expect(state).toEqual(reducer(void 0, action));
});
