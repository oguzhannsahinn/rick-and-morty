import React, { Component } from 'react'
import { connect } from 'react-redux'
import './character.css'


class CharacterDetail extends Component {

  render() {
    const char = this.props.currentCharacter
    return (
      <div className='wrapper'>
        <div className='char-wrapper'>
          <h3 className='title'> {char.name} </h3>
          <div className='content'>
          <div className='character-content'>
                    <img src={char.image} />
                    <br/>
                    <br/>
                    {char.gender !== 'unknown' ? <span className='mt-2 character-property'> {char.gender} </span>: ''}
                    {char.species !== 'unknown' ? <span className='mt-2 character-property'> {char.species} </span>: ''}
                    {char.status !== 'unknown' ? <span className='mt-2 character-property'> {char.status} </span>: ''}
                  </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCharacter: state.currentCharacterReducer,
  }
}
export default connect (mapStateToProps)(CharacterDetail)