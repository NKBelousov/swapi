import { READY, LOADING } from '~/constants/statuses'

import { createReducer, INITIAL_STATE } from './helpers'

const FETCH = 'FETCH'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const reducer = createReducer({
  FETCH,
  SUCCESS,
  FAILURE
})

describe('[helpers] createReducer', () => {
  it('should handle unknown action', () => {
    expect(reducer(INITIAL_STATE, {
      type: undefined,
    })).toEqual(INITIAL_STATE)
  })

  it('should handle FETCH action', () => {
    expect(reducer(INITIAL_STATE, {
      type: FETCH,
    })).toEqual({
      ...INITIAL_STATE,
      status: LOADING
    })
  })

  it('should handle SUCCESS action', () => {
    expect(reducer(INITIAL_STATE, {
      type: SUCCESS,
      data: [42],
    })).toEqual({
      ...INITIAL_STATE,
      status: READY,
      data: [42]
    })
  })

  it('should handle FAILURE action', () => {
    expect(reducer(INITIAL_STATE, {
      type: FAILURE,
    })).toEqual(INITIAL_STATE)
  })
})