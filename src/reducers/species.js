import {
  FETCH_SPECIES,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
} from "~/actions/species";

import { createReducer } from "./helpers";

export default createReducer({
  FETCH: FETCH_SPECIES,
  SUCCESS: FETCH_SPECIES_SUCCESS,
  FAILURE: FETCH_SPECIES_FAILURE,
});
