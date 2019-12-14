import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/planets";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";

export function* watchPlanets() {
  yield takeLatest(
    actions.FETCH_PLANETS,
    createGreedySaga({
      url: `${API_ROOT}/planets/`,
      fetch: actions.fetchPlanets,
      success: actions.fetchPlanetsSuccess,
      failure: actions.fetchPlanetsFailure,
    })
  );
}
