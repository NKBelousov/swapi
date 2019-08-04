import axios from "axios";

export const REQUEST_SPACESHIPS = "@@spaceships/REQUEST";
export function requestSpaceships() {
  return function (dispatch) {
    dispatch(fetchSpaceships());
    return axios
      .get("https://swapi.co/api/spaceships")
      .then(response => {
        dispatch(fetchSpaceshipsSuccess(response.data.results));
      })
      .catch(() => {
        dispatch(fetchSpaceshipsFailure());
      });
  };
}

export const FETCH_SPACESHIPS = "@@spaceships/FETCH";
export function fetchSpaceships() {
  return {
    type: FETCH_SPACESHIPS,
  };
}

export const FETCH_SPACESHIPS_SUCCESS = "@@spaceships/FETCH_SUCCESS";
export function fetchSpaceshipsSuccess(data) {
  return {
    data,
    type: FETCH_SPACESHIPS_SUCCESS,
  };
}

export const FETCH_SPACESHIPS_FAILURE = "@@spaceships/FETCH_FAILURE";
export function fetchSpaceshipsFailure() {
  return {
    type: FETCH_SPACESHIPS_FAILURE,
  };
}

export const GO_TO_SPACESHIPS = "@@spaceships/GO_TO";
export function goToSpaceships() {
  return {
    type: GO_TO_SPACESHIPS,
    url: "/spaceships",
  };
}
