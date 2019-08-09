import { each } from "lodash";

import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PLANETS,
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_SUCCESS,
  FETCH_FILMS,
  FETCH_FILMS_FAILURE,
  FETCH_FILMS_SUCCESS,
  FETCH_STARSHIPS,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIPS_SUCCESS,
  GO_TO_PEOPLE,
  GO_TO_PLANETS,
  GO_TO_FILMS,
  GO_TO_STARSHIPS
} from "~/actions";

import { NONE, LOADING, READY } from "~/constants/modes";

const INITIAL_STATE = {
  people: {
    data: [],
    status: NONE,
  },
  planets: {
    data: [],
    status: NONE,
  },
  films: {
    data: [],
    status: NONE,
  },
  starships: {
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
  ],
};

function store(state = INITIAL_STATE, action) {
  const nextState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case GO_TO_PEOPLE:
    case GO_TO_PLANETS:
    case GO_TO_FILMS:
    case GO_TO_STARSHIPS:
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
    case FETCH_PLANETS:
      nextState.planets.status = LOADING;
      return nextState;
    case FETCH_PLANETS_SUCCESS:
      nextState.planets.data = action.data;
      nextState.planets.status = READY;
      return nextState;
    case FETCH_PLANETS_FAILURE:
      nextState.planets.data = [];
      nextState.planets.status = NONE;
      return nextState;
    case FETCH_FILMS:
      nextState.films.status = LOADING;
      return nextState;
    case FETCH_FILMS_SUCCESS:
      nextState.films.data = action.data;
      nextState.films.status = READY;
      return nextState;
    case FETCH_FILMS_FAILURE:
      nextState.films.data = [];
      nextState.films.status = NONE;
      return nextState;
    case FETCH_STARSHIPS:
      nextState.starships.status = LOADING;
      return nextState;
    case FETCH_STARSHIPS_SUCCESS:
      nextState.starships.data = action.data;
      nextState.starships.status = READY;
      return nextState;
    case FETCH_STARSHIPS_FAILURE:
      nextState.starships.data = [];
      nextState.starships.status = NONE;
      return nextState;
    default:
      return nextState;
  }
}

export default store;
