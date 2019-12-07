export const REQUEST_PLANETS = "@@planets/REQUEST";
export const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

export const FETCH_PLANETS = "@@planets/FETCH";
export const fetchPlanets = () => ({
  type: FETCH_PLANETS,
});

export const FETCH_PLANETS_FAILURE = "@@planets/FETCH_FAILURE";
export const fetchPlanetsFailure = () => ({
  type: FETCH_PLANETS_FAILURE,
});

export const FETCH_PLANETS_SUCCESS = "@@planets/FETCH_SUCCESS";
export const fetchPlanetsSuccess = data => ({
  data,
  type: FETCH_PLANETS_SUCCESS,
});
