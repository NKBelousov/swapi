import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/films";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";

export function* watchFilms() {
  yield takeLatest(
    actions.FETCH_FILMS,
    createGreedySaga({
      url: `${API_ROOT}/films/`,
      fetch: actions.fetchFilms,
      success: actions.fetchFilmsSuccess,
      failure: actions.fetchFilmsFailure,
    })
  );
}
