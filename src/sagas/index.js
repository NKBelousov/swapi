import axios from "axios";
import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/people";

const API_ROOT = `https://swapi.co/api`;

function* fetchPeople() {
  yield put(actions.fetchPeople());
  try {
    const response = yield call(axios.get, `${API_ROOT}/people/`);
    yield put(actions.fetchPeopleSuccess(response.data.results));
  } catch (e) {
    yield put(actions.fetchPeopleFailure(e));
  }
}

function* watchPeople() {
  yield takeLatest(actions.REQUEST_PEOPLE, fetchPeople);
}

export default function*() {
  yield all([watchPeople()]);
}
