import axios from "axios";

export const REQUEST_STARSHIPS = "@@starships/REQUEST";
export function requestStarships() {
  return function (dispatch) {
    dispatch(fetchStarships());
    return axios
      .get("https://swapi.co/api/starships")
      .then(response => {
        dispatch(fetchStarshipsSuccess(response.data.results));
      })
      .catch(() => {
        dispatch(fetchStarshipsFailure());
      });
  };
}

export const FETCH_STARSHIPS = "@@starships/FETCH";
export function fetchStarships() {
  return {
    type: FETCH_STARSHIPS,
  };
}

export const FETCH_STARSHIPS_SUCCESS = "@@starships/FETCH_SUCCESS";
export function fetchStarshipsSuccess(data) {
  return {
    data,
    type: FETCH_STARSHIPS_SUCCESS,
  };
}

export const FETCH_STARSHIPS_FAILURE = "@@starships/FETCH_FAILURE";
export function fetchStarshipsFailure() {
  return {
    type: FETCH_STARSHIPS_FAILURE,
  };
}