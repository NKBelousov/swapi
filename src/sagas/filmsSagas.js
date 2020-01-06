import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/films";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";
import { FILMS } from "~/constants/entities";

export function* watchFilms() {
  yield takeLatest(
    actions.FETCH_FILMS,
    createGreedySaga({
      url: `${API_ROOT}/${FILMS}/`,
      fetch: actions.fetchFilms,
      success: actions.fetchFilmsSuccess,
      failure: actions.fetchFilmsFailure,
    })
  );
}
