import {
  FETCH_VEHICLES,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAILURE,
} from "~/actions/vehicles";

import { createReducer } from "./helpers";

export default createReducer({
  FETCH: FETCH_VEHICLES,
  SUCCESS: FETCH_VEHICLES_SUCCESS,
  FAILURE: FETCH_VEHICLES_FAILURE,
});
