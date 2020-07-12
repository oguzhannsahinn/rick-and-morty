import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import './characters.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import {Badge} from 'reactstrap'
import * as characterListActions from '../../redux/actions/characterListActions'
import * as filterActions from '../../redux/actions/filterActions'

class CharacterList extends Component {
  componentDidMount() {
    this.props.actions.getCharacters() 

    // filter
    const filters = document.querySelectorAll(".badge-dark");
    for(const filter of filters) {
      filter.addEventListener('click', (e) => {
        filters.forEach(e => e.classList.remove('active'))
        e.target.classList.add('active')
        this.props.actions.getFilter(e.target.textContent, e.target.parentElement.dataset.type)
      })
    }
  }

  selectCharacter = (character) => {
    this.props.actions.getClickedCharacter(character)
  }  

  render() {
    const searchTerm = this.props.searchTerm !== '' ? this.props.searchTerm.toLowerCase() : '';
    const filterWord = this.props.filter.word;
    const filterType = this.props.filter.type;

    return (
      <div className='character-list-wrapper'>
        {this.props.searchTerm !== '' ? <h3 className='title'>Result for <span style={{fontWeight:'bold'}}>{this.props.searchTerm}</span></h3> : '' }
        <div className='ml-4 mt-4 filters'>
          <h5 className='filter-title'>Filters : </h5>

          <div className='filter-group' data-type='gender'>
          <span>Gender | </span>
            <Badge color='dark'>Male</Badge>
            <Badge color='dark'>Female</Badge>
          </div>

          <div className='filter-group' data-type='species'>
            <span>Species | </span>
            <Badge color='dark'>Alien</Badge>
            <Badge color='dark'>Human</Badge>
          </div>

          <div className='filter-group' data-type='status'>
            <span>Status | </span>
            <Badge color='dark'>Alive</Badge>
            <Badge color='dark'>Dead</Badge>
          </div>
          
        </div>
        <hr/>
        <div>
          {
            this.props.characters.filter(data => {
              if(searchTerm === "")
                  return data
              else if(data.name.toLowerCase().includes(searchTerm)){
                  return data
              }
            }).filter( f => {
                if(filterWord === "")
                  return f
                else if(f[filterType].includes(filterWord)){
                  return f
              }
            }).map(char => (
              <div className='mb-5 character-wrapper col-lg-4 col-md-6 col-sm-12'
                  key={char.id} 
                  onClick={() => this.selectCharacter(char)}
              > 
                <Link to="/CharacterDetail" style={{textDecoration:'none'}}>
                  <div className='character-content'>
                    <img src={char.image} />
                    <br/>
                    <p className='mt-2 character-link'>{char.name}</p>
                    {char.gender !== 'unknown' ? <span className='mt-2 character-property'> {char.gender} </span>: ''}
                    {char.species !== 'unknown' ? <span className='mt-2 character-property'> {char.species} </span>: ''}
                    {char.status !== 'unknown' ? <span className='mt-2 character-property'> {char.status} </span>: ''}
                  </div>
                </Link>       
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characterListReducer,
    currentCharacter: state.currentCharacterReducer,
    searchTerm: state.searchTermReducer,
    filter: state.filterReducer
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    actions: {
      getCharacters: bindActionCreators(characterListActions.getCharacters, dispatch),
      getClickedCharacter: bindActionCreators(characterListActions.getClickedCharacter, dispatch),
      getFilter: bindActionCreators(filterActions.getFilter, dispatch)
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CharacterList)