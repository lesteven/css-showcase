import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

class Template extends Component {

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className = 'max-width-two'>
          { this.props.children }
        </div>
      </Fragment>
    )
  }  
}

export default Template;
