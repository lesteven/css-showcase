import React, { Component } from 'react';
import Hamburger from './components/Hamburger';
import Hamburger2 from './components/Hamburger2';


class AnimPage extends Component {
  render() {
    return (
      <>
        <h2> Click on icon to see animations! </h2>
        <Hamburger />
        <Hamburger2 />
      </>
    )
  }
}




export default AnimPage;

