import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
} from "~/actions";

const LOADING = "loading";
const NONE = "none";
const READY = "ready";

const INITIAL_STATE = {
  people: {
    data: [],
    status: NONE,
  },
};

function store(state = INITIAL_STATE, action) {
  const nextState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
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
