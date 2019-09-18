import {
  FETCH_PLANETS, FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE
} from '~/actions/planets'

import { createReducer } from './helpers'

export default createReducer({
  FETCH: FETCH_PLANETS,
  SUCCESS: FETCH_PLANETS_SUCCESS,
  FAILURE: FETCH_PLANETS_FAILURE
})