export const FETCH_VEHICLES = "@@vehicles/FETCH";
export const fetchVehicles = () => ({
  type: FETCH_VEHICLES,
});

export const FETCH_VEHICLES_FAILURE = "@@vehicles/FETCH_FAILURE";
export const fetchVehiclesFailure = () => ({
  type: FETCH_VEHICLES_FAILURE,
});

export const FETCH_VEHICLES_SUCCESS = "@@vehicles/FETCH_SUCCESS";
export const fetchVehiclesSuccess = data => ({
  type: FETCH_VEHICLES_SUCCESS,
  data,
});
