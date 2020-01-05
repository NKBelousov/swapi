import { getPersonByName } from "./getPersonByName";

describe("[helpers] getPersonByName", () => {
  it("should get person by name if it exists", () => {
    const state = {
      people: {
        data: [{ name: "Luke" }],
      },
    };

    expect(getPersonByName(state.people.data[0].name)(state)).toEqual(
      state.people.data[0]
    );
  });

  it(`should return undefined if it doesn't exist`, () => {
    const state = {
      people: {
        data: [{ name: "Luke" }],
      },
    };

    expect(getPersonByName("Darth Vader")(state)).toBeUndefined();
  });
});
