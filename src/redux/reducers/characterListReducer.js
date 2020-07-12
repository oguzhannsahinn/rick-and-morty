import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function characterListReducer ( state=initialState.characters, action ) {
  switch (action.type) {
    case actionTypes.GET_CHARACTERS_SUCCESS:
      return action.payload
    default:
      return state;
  }
}