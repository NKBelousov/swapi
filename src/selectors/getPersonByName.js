import { createSelector } from "reselect";

export const getPersonByName = name => {
  return createSelector(
    [state => state.people.data],
    data => data.find(person => person.name === name)
  );
};
