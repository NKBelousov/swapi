export const FETCH_FILMS = "@@films/FETCH";
export const fetchFilms = () => ({
  type: FETCH_FILMS,
});

export const FETCH_FILMS_SUCCESS = "@@films/FETCH_SUCCESS";
export const fetchFilmsSuccess = data => ({
  data,
  type: FETCH_FILMS_SUCCESS,
});

export const FETCH_FILMS_FAILURE = "@@films/FETCH_FAILURE";
export const fetchFilmsFailure = () => ({
  type: FETCH_FILMS_FAILURE,
});
