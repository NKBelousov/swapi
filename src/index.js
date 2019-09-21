import { throttle } from 'lodash'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import createSagaMiddleware from "redux-saga";
import React from "react";
import thunk from "redux-thunk";

import reducers from "~/reducers";
import App from "~/containers/App";
import sagas from "~/sagas";

const STATE_KEY = "redux_state";
let initialState = void 0;

const sagaMiddleware = createSagaMiddleware();

try {
  const stored = localStorage.getItem(STATE_KEY);
  if (stored) {
    initialState = JSON.parse(stored);
  }
} finally {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, sagaMiddleware)
  );
  sagaMiddleware.run(sagas);

  store.subscribe(throttle(() => {
    localStorage.setItem(STATE_KEY, JSON.stringify(store.getState()));
  }, 300));

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
}
