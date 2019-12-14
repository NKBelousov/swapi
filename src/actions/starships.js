export const FETCH_STARSHIPS = "@@starships/FETCH";
export const fetchStarships = () => ({
  type: FETCH_STARSHIPS,
});

export const FETCH_STARSHIPS_SUCCESS = "@@starships/FETCH_SUCCESS";
export const fetchStarshipsSuccess = data => ({
  data,
  type: FETCH_STARSHIPS_SUCCESS,
});

export const FETCH_STARSHIPS_FAILURE = "@@starships/FETCH_FAILURE";
export const fetchStarshipsFailure = () => ({
  type: FETCH_STARSHIPS_FAILURE,
});
