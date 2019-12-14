import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/people";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";

export function* watchPeople() {
  yield takeLatest(
    actions.FETCH_PEOPLE,
    createGreedySaga({
      url: `${API_ROOT}/people/`,
      fetch: actions.fetchPeople,
      success: actions.fetchPeopleSuccess,
      failure: actions.fetchPeopleFailure,
    })
  );
}
