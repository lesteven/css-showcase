import React, { Component } from 'react';
import Hamburger4 from './Hamburger4';
import style from '../css/ham-slide.css';
import Menu from './Menu';

class HamSlide extends Component {
  render() {
    const { menuArr } = this.props;
    return (
      <div className = 'ham-slide'>
        <div className = 'ham-wrapper'>
          <Hamburger4 menuArr = { menuArr }/>
        </div>
      </div>
    )
  }
}




export default HamSlide;
