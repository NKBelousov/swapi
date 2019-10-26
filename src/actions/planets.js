import axios from "axios";

export const REQUEST_PLANETS = "@@planets/REQUEST";
export function requestPlanets() {
  return function (dispatch) {
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

export const FETCH_PLANETS = "@@planets/FETCH";
export function fetchPlanets() {
  return {
    type: FETCH_PLANETS,
  };
}

export const FETCH_PLANETS_SUCCESS = "@@planets/FETCH_SUCCESS";
export function fetchPlanetsSuccess(data) {
  return {
    data,
    type: FETCH_PLANETS_SUCCESS,
  };
}

export const FETCH_PLANETS_FAILURE = "@@planets/FETCH_FAILURE";
export function fetchPlanetsFailure() {
  return {
    type: FETCH_PLANETS_FAILURE,
  };
}
