import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/species";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";

export function* watchSpecies() {
  yield takeLatest(
    actions.FETCH_SPECIES,
    createGreedySaga({
      url: `${API_ROOT}/species/`,
      fetch: actions.fetchSpecies,
      success: actions.fetchSpeciesSuccess,
      failure: actions.fetchSpeciesFailure,
    })
  );
}
