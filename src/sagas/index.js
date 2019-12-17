import { all } from "redux-saga/effects";

import { watchPeople } from "./peopleSagas";
import { watchPlanets } from "./planetsSagas";
import { watchFilms } from "./filmsSagas";
import { watchStarships } from "./starshipsSagas";
import { watchSpecies } from "./speciesSagas";

export default function*() {
  yield all([
    watchPeople(),
    watchSpecies(),
    watchPlanets(),
    watchFilms(),
    watchStarships(),
  ]);
}
