import axios from "axios";
import { call, put, takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/planets";
import { API_ROOT } from "~/constants/Api";

function* fetchPlanets() {
  yield put(actions.fetchPlanets());
  try {
    const response = yield call(axios.get, `${API_ROOT}/planets/`);
    yield put(actions.fetchPlanetsSuccess(response.data.results));
  } catch (e) {
    yield put(actions.fetchPlanetsFailure(e));
  }
}

export function* watchPlanets() {
  yield takeLatest(actions.REQUEST_PLANETS, fetchPlanets);
}
