import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Badge
} from 'reactstrap';
import './navi.css'
import * as searchTermActions from '../../redux/actions/searchTermActions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from './logo.png'

class Navi extends Component {

  setSearchTerm = (searchTerm) => {
    this.props.actions.getSearchTerm(searchTerm)
  }

  render() {
    return (
      <div className='menu'>
        <Navbar light expand="md">
          <NavbarBrand className='navbarbrand' href="/">
            <img src={logo} />
          </NavbarBrand>
          <input 
            type='text'
            placeholder='Search'
            className='search-bar'
            onChange={(e) => this.setSearchTerm(e.target.value)}
          />
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTermReducer
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    actions: {
      getSearchTerm: bindActionCreators(searchTermActions.getSearchTerm, dispatch)
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Navi)