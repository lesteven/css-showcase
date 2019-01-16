import React, { Component } from 'react';
import Hamburger from './components/Hamburger';
import Hamburger2 from './components/Hamburger2';
import Hamburger3 from './components/Hamburger3';


class AnimPage extends Component {
  render() {
    return (
      <>
        <h2>
          Click on the icons to see the transitions & animations! 
        </h2>
        <Hamburger3 />
        <Hamburger />
        <Hamburger2 />
      </>
    )
  }
}




export default AnimPage;

