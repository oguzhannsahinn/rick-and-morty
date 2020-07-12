import * as actionTypes from './actionTypes'

export function getSearchTerm(searchTerm) {
  return {
    type: actionTypes.GET_SEARCH_TERM,
    payload: searchTerm
  }
}