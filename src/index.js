import React from "react";
import { render } from "react-dom";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "~/reducers";
import App from "~/containers/App";

const STATE_KEY = "redux_state";
let initialState = void 0;

try {
  const stored = localStorage.getItem(STATE_KEY);
  if (stored) {
    initialState = JSON.parse(stored);
  }
} finally {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));

  store.subscribe(() => {
    localStorage.setItem(STATE_KEY, JSON.stringify(store.getState()));
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
}
