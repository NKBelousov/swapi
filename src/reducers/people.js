import {
  FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE
} from '~/actions/people'

import { createReducer } from './helpers'

export default createReducer({
  FETCH: FETCH_PEOPLE,
  SUCCESS: FETCH_PEOPLE_SUCCESS,
  FAILURE: FETCH_PEOPLE_FAILURE
})