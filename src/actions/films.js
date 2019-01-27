import axios from "axios";

export const REQUEST_FILMS = "REQUEST_FILMS";
export function requestFilms() {
  return function(dispatch) {
    dispatch(fetchFilms());
    return axios
      .get("https://swapi.co/api/films")
      .then(response => {
        dispatch(fetchFilmsSuccess(response.data.results));
      })
      .catch(() => {
        dispatch(fetchFilmsFailure());
      });
  };
}

export const FETCH_FILMS = "FETCH_FILMS";
export function fetchFilms() {
  return {
    type: FETCH_FILMS,
  };
}

export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export function fetchFilmsSuccess(data) {
  return {
    data,
    type: FETCH_FILMS_SUCCESS,
  };
}

export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";
export function fetchFilmsFailure() {
  return {
    type: FETCH_FILMS_FAILURE,
  };
}

export const GO_TO_FILMS = "GO_TO_FILMS";
export function goToFilms() {
  return {
    type: GO_TO_FILMS,
    url: "/films",
  };
}
