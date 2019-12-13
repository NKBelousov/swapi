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

export const REQUEST_PERSON = "@@people/REQUEST_PERSON";
export const requestPerson = id => ({
  type: REQUEST_PERSON,
  payload: id,
});

export const FETCH_PERSON = "@@people/FETCH_PERSON";
export const fetchPerson = id => ({
  type: FETCH_PERSON,
  payload: id,
});

export const FETCH_PERSON_SUCCESS = "@@people/FETCH_PERSON_SUCCESS";
export const fetchPersonSuccess = data => ({
  type: FETCH_PERSON_SUCCESS,
  payload: data,
});

export const FETCH_PERSON_FAILURE = "@@people/FETCH_PERSON_FAILURE";
export const fetchPersonFailure = () => ({
  type: FETCH_PERSON_FAILURE,
});
