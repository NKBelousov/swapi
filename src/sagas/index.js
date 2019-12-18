import { all } from "redux-saga/effects";

import { watchPeople } from "./peopleSagas";
import { watchPlanets } from "./planetsSagas";
import { watchFilms } from "./filmsSagas";
import { watchStarships } from "./starshipsSagas";
import { watchSpecies } from "./speciesSagas";
import { watchVehicles } from "./vehiclesSagas";

export default function*() {
  yield all([
    watchFilms(),
    watchPeople(),
    watchPlanets(),
    watchSpecies(),
    watchStarships(),
    watchVehicles(),
  ]);
}
