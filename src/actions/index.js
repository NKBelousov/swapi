import axios from "axios";

export const REQUEST_PEOPLE = "REQUEST_PEOPLE";
export function requestPeople() {
  return function(dispatch) {
    dispatch(fetchPeople());
    return axios
      .get("https://swapi.co/api/people")
      .then(response => {
        dispatch(fetchPeopleSuccess(response.data.results));
      })
      .catch(() => {
        dispatch(fetchPeopleFailure());
      });
  };
}

export const FETCH_PEOPLE = "FETCH_PEOPLE";
export function fetchPeople() {
  return {
    type: FETCH_PEOPLE,
  };
}

export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export function fetchPeopleSuccess(data) {
  return {
    data,
    type: FETCH_PEOPLE_SUCCESS,
  };
}

export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE";
export function fetchPeopleFailure() {
  return {
    type: FETCH_PEOPLE_FAILURE,
  };
}

export const GO_TO_PEOPLE = "GO_TO_PEOPLE";
export function goToPeople() {
  return {
    type: GO_TO_PEOPLE,
    url: "/people",
  };
}

export const GO_TO_PLANETS = "GO_TO_PLANETS";
export function goToPlanets() {
  return {
    type: GO_TO_PLANETS,
    url: "/planets",
  };
}
