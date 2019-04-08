export const REQUEST_PEOPLE = "REQUEST_PEOPLE";
export const requestPeople = () => ({
  type: REQUEST_PEOPLE,
});

export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const fetchPeople = () => ({
  type: FETCH_PEOPLE,
});

export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE";
export const fetchPeopleFailure = () => ({
  type: FETCH_PEOPLE_FAILURE,
});

export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const fetchPeopleSuccess = data => ({
  type: FETCH_PEOPLE_SUCCESS,
  data,
});

export const GO_TO_PEOPLE = "GO_TO_PEOPLE";
export const goToPeople = () => ({
  type: GO_TO_PEOPLE,
  url: "/people",
});
