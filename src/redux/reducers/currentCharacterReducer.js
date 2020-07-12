import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function changeCategoryReducer ( state=initialState.currentCharacter, action ) {
  switch (action.type) {
    case actionTypes.GET_CLICKED_CHARACTER:
      return action.payload
    default:
      return state;
  }
}