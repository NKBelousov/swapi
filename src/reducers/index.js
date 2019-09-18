import { each } from 'lodash'
import { combineReducers } from "redux";

import people from './people'
import films from './films'
import planets from './planets'
import starships from './starships'

import {
  GO_TO_PEOPLE,
  GO_TO_PLANETS,
  GO_TO_FILMS,
  GO_TO_STARSHIPS
} from "~/actions";

const ROUTES = [
  {
    active: true,
    name: "People",
    url: "/people",
  },
  {
    active: false,
    name: "Planets",
    url: "/planets",
  },
  {
    active: false,
    name: "Films",
    url: "/films",
  },
  {
    active: false,
    name: "Starships",
    url: "/starships",
  },
]

export default combineReducers({
  films,
  people,
  planets,
  starships,
  routes: (state = ROUTES, action) => {
    switch (action.type) {
      case GO_TO_PEOPLE:
      case GO_TO_PLANETS:
      case GO_TO_FILMS:
      case GO_TO_STARSHIPS:
        const nextState = JSON.parse(JSON.stringify(state))
        each(nextState, r => {
          r.active = r.url === action.url;
        });
        return nextState;
      default:
        return state;
    }
  }
});
