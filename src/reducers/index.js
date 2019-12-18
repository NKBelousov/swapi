import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { createBrowserHistory } from "history";

import people from "./people";
import films from "./films";
import planets from "./planets";
import starships from "./starships";
import species from "./species";
import vehicles from "./vehicles";

export const history = createBrowserHistory();

export default combineReducers({
  films,
  people,
  planets,
  starships,
  species,
  vehicles,
  router: connectRouter(history),
});
