import axios from "axios";

export const REQUEST_FILMS = "@@films/REQUEST";
export function requestFilms() {
  return function (dispatch) {
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

export const FETCH_FILMS = "@@films/FETCH";
export function fetchFilms() {
  return {
    type: FETCH_FILMS,
  };
}

export const FETCH_FILMS_SUCCESS = "@@films/FETCH_SUCCESS";
export function fetchFilmsSuccess(data) {
  return {
    data,
    type: FETCH_FILMS_SUCCESS,
  };
}

export const FETCH_FILMS_FAILURE = "@@films/FETCH_FAILURE";
export function fetchFilmsFailure() {
  return {
    type: FETCH_FILMS_FAILURE,
  };
}

export const GO_TO_FILMS = "@@films/GO_TO";
export function goToFilms() {
  return {
    type: GO_TO_FILMS,
    url: "/films",
  };
}
