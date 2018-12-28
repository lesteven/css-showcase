import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

class Template extends Component {

  render() {
    return (
      <Fragment>
        <NavBar />
          { this.props.children }
      </Fragment>
    )
  }  
}

export default Template;
