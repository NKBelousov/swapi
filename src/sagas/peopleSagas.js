import axios from "axios";
import { call, put, takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/people";
import { API_ROOT } from "~/constants/Api";

function* fetchPeople() {
  yield put(actions.fetchPeople());
  try {
    const response = yield call(axios.get, `${API_ROOT}/people/`);
    yield put(actions.fetchPeopleSuccess(response.data.results));
  } catch (e) {
    yield put(actions.fetchPeopleFailure(e));
  }
}

export function* watchPeople() {
  yield takeLatest(actions.REQUEST_PEOPLE, fetchPeople);
}
