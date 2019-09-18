import {
  FETCH_STARSHIPS,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE
} from '~/actions/starships'

import { createReducer } from './helpers'

export default createReducer({
  FETCH: FETCH_STARSHIPS,
  SUCCESS: FETCH_STARSHIPS_SUCCESS,
  FAILURE: FETCH_STARSHIPS_FAILURE
})