import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore as createReduxStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { throttle } from "lodash";

import sagas from "~/sagas";
import rootReducer from "~/reducers";

export const createStore = () => {
  const STATE_KEY = "redux_state";
  let initialState = void 0;

  const sagaMiddleware = createSagaMiddleware();

  try {
    const stored = localStorage.getItem(STATE_KEY);
    if (stored) {
      initialState = JSON.parse(stored);
    }
  } finally {
    const store = createReduxStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
    );
    sagaMiddleware.run(sagas);

    store.subscribe(
      throttle(() => {
        localStorage.setItem(STATE_KEY, JSON.stringify(store.getState()));
      }, 300)
    );

    return store;
  }
};
