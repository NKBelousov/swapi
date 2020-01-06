import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/people";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";
import { PEOPLE } from "~/constants/entities";

export function* watchPeople() {
  yield takeLatest(
    actions.FETCH_PEOPLE,
    createGreedySaga({
      url: `${API_ROOT}/${PEOPLE}/`,
      fetch: actions.fetchPeople,
      success: actions.fetchPeopleSuccess,
      failure: actions.fetchPeopleFailure,
    })
  );
}
