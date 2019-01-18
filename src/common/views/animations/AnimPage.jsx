import React, { Component } from 'react';
import Hamburger from './components/Hamburger';
import Hamburger2 from './components/Hamburger2';
import Hamburger3 from './components/Hamburger3';
import HamSlide from './components/HamSlide';
import menuData from './menuData';
import Loading from './components/Loading';


class AnimPage extends Component {
  render() {
    return (
      <>
        <h2>
          Click on the icons to see the transitions & animations! 
        </h2>
        <HamSlide menuArr = { menuData }/>
        <Loading />
        <Hamburger3 />
        <Hamburger />
        <Hamburger2 />
      </>
    )
  }
}




export default AnimPage;

