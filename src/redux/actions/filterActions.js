import * as actionTypes from './actionTypes'

export function getFilter(word, type) {
  return {
    type: actionTypes.GET_FILTER,
    payload: {word, type}
  }
}