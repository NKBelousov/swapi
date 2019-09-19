import { READY, LOADING, NONE } from '~/constants/modes'

export const INITIAL_STATE = {
  data: [],
  status: NONE
}

/**
 * @param {Object} config
 * @param {String} config.FETCH
 * @param {String} config.SUCCESS
 * @param {String} config.FAILURE
 */
export function createReducer({ FETCH, SUCCESS, FAILURE }) {
  return (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH:
        return {
          ...state,
          status: LOADING,
        }
      case SUCCESS:
        return {
          ...state,
          data: action.data,
          status: READY,
        }
      case FAILURE:
        return {
          ...state,
          data: [],
          status: NONE,
        }
      default:
        return state
    }
  }
}