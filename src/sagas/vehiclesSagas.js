import { takeLatest } from "@redux-saga/core/effects";

import * as actions from "~/actions/vehicles";
import { API_ROOT } from "~/constants/Api";
import { createGreedySaga } from "./helpers";
import { VEHICLES } from "~/constants/entities";

export function* watchVehicles() {
  yield takeLatest(
    actions.FETCH_VEHICLES,
    createGreedySaga({
      url: `${API_ROOT}/${VEHICLES}/`,
      fetch: actions.fetchVehicles,
      success: actions.fetchVehiclesSuccess,
      failure: actions.fetchVehiclesFailure,
    })
  );
}
