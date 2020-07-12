import * as actionTypes from './actionTypes'

export function getCharactersSuccess(characters) {
  return {
    type: actionTypes.GET_CHARACTERS_SUCCESS,
    payload: characters
  }
}

export function getClickedCharacter(currentCharacter) {
  return {
    type: actionTypes.GET_CLICKED_CHARACTER,
    payload: currentCharacter
  }
}

export function getCharacters() {
  return function (dispatch) {
    let url = 'https://rickandmortyapi.com/api/character/';
    return fetch(url)
      .then(res => res.json())
      .then(data => dispatch(getCharactersSuccess(data.results)))
  }
}