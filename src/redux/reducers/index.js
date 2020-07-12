import {combineReducers} from 'redux'
import characterListReducer from './characterListReducer'
import currentCharacterReducer from './currentCharacterReducer'
import searchTermReducer from './searchTermReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  characterListReducer,
  currentCharacterReducer,
  searchTermReducer,
  filterReducer
})

export default rootReducer;