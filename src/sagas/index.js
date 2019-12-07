import { all } from "redux-saga/effects";

import { watchPeople } from "./peopleSagas";
import { watchPlanets } from "./planetsSagas";

export default function*() {
  yield all([watchPeople(), watchPlanets()]);
}
