import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import { withRouter } from 'react-router';
import style from './css/template.css';

class Template extends Component {

  render() {
    return (
      <>
        <NavBar />
        { this.props.children }
      </>
    )
  }  
}

export default Template;
