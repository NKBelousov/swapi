import { each } from "lodash";

import {
  GO_TO_PEOPLE,
  GO_TO_PLANETS,
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
} from "~/actions";

import { NONE, LOADING, READY } from "~/actions/constants";

const INITIAL_STATE = {
  people: {
    data: [],
    status: NONE,
  },
  planets: {
    data: [],
    status: NONE,
  },
  routes: [
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
  ],
};

function store(state = INITIAL_STATE, action) {
  const nextState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GO_TO_PEOPLE:
    case GO_TO_PLANETS:
      each(nextState.routes, r => {
        r.active = r.url === action.url;
      });
      return nextState;
    case FETCH_PEOPLE:
      nextState.people.status = LOADING;
      return nextState;
    case FETCH_PEOPLE_SUCCESS:
      nextState.people.data = action.data;
      nextState.people.status = READY;
      return nextState;
    case FETCH_PEOPLE_FAILURE:
      nextState.people.data = [];
      nextState.people.status = NONE;
      return nextState;
    default:
      return nextState;
  }
}

export default store;
