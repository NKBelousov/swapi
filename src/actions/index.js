export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE";

export function fetchPeople() {
  return {
    type: FETCH_PEOPLE,
  };
}

export function fetchPeopleSuccess(data) {
  return {
    data,
    type: FETCH_PEOPLE_SUCCESS,
  };
}

export function fetchPeopleFailure() {
  return {
    type: FETCH_PEOPLE_FAILURE,
  };
}
