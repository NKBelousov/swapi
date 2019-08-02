export const REQUEST_PEOPLE = "@@people/REQUEST";
export const requestPeople = () => ({
  type: REQUEST_PEOPLE,
});

export const FETCH_PEOPLE = "@@people/FETCH";
export const fetchPeople = () => ({
  type: FETCH_PEOPLE,
});

export const FETCH_PEOPLE_FAILURE = "@@people/FETCH_FAILURE";
export const fetchPeopleFailure = () => ({
  type: FETCH_PEOPLE_FAILURE,
});

export const FETCH_PEOPLE_SUCCESS = "@@people/FETCH_SUCCESS";
export const fetchPeopleSuccess = data => ({
  type: FETCH_PEOPLE_SUCCESS,
  data,
});

export const GO_TO_PEOPLE = "@@people/GO_TO";
export const goToPeople = () => ({
  type: GO_TO_PEOPLE,
  url: "/people",
});
