import axios from "axios";
import { call, put } from "redux-saga/effects";

/**
 * Helper generator to fetch url while there are more results to be fetched
 * Needed because api endpoint doesn't support perPage param
 */
export function* greedyFetch(url) {
  let results = [];
  let page = 1;
  let count = 0;
  do {
    const response = yield call(axios.get, `${url}?page=${page}`);
    if (!count) {
      count = response.data.count;
    }
    page++;
    results = results.concat(response.data.results);
  } while (results.length !== count);
  return results;
}

/**
 * Helper function to create greedy saga
 */
export function createGreedySaga({ url, fetch, success, failure }) {
  return function*() {
    yield put(fetch);
    try {
      const response = yield* greedyFetch(url);
      yield put(success(response));
    } catch (e) {
      yield put(failure(e));
    }
  };
}
