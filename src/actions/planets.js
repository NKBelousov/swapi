import axios from "axios";

export const REQUEST_PLANETS = "REQUEST_PLANETS";
export function requestPlanets() {
  return function(dispatch) {
    dispatch(fetchPlanets());
    return axios
      .get("https://swapi.co/api/planets")
      .then(response => {
        dispatch(fetchPlanetsSuccess(response.data.results));
      })
      .catch(() => {
        dispatch(fetchPlanetsFailure());
      });
  };
}

export const FETCH_PLANETS = "FETCH_PLANETS";
export function fetchPlanets() {
  return {
    type: FETCH_PLANETS,
  };
}

export const FETCH_PLANETS_SUCCESS = "FETCH_PLANETS_SUCCESS";
export function fetchPlanetsSuccess(data) {
  return {
    data,
    type: FETCH_PLANETS_SUCCESS,
  };
}

export const FETCH_PLANETS_FAILURE = "FETCH_PLANETS_FAILURE";
export function fetchPlanetsFailure() {
  return {
    type: FETCH_PLANETS_FAILURE,
  };
}

export const GO_TO_PLANETS = "GO_TO_PLANETS";
export function goToPlanets() {
  return {
    type: GO_TO_PLANETS,
    url: "/planets",
  };
}
