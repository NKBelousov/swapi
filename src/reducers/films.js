import {
  FETCH_FILMS,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE
} from '~/actions/films'

import { createReducer } from './helpers'

export default createReducer({
  FETCH: FETCH_FILMS,
  SUCCESS: FETCH_FILMS_SUCCESS,
  FAILURE: FETCH_FILMS_FAILURE
})