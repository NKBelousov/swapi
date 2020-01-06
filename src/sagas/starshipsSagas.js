import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/starships";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";
import { STARSHIPS } from "~/constants/entities";

export function* watchStarships() {
  yield takeLatest(
    actions.FETCH_STARSHIPS,
    createGreedySaga({
      url: `${API_ROOT}/${STARSHIPS}/`,
      fetch: actions.fetchStarships,
      success: actions.fetchStarshipsSuccess,
      failure: actions.fetchStarshipsFailure,
    })
  );
}
