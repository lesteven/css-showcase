import React, { Component } from 'react';
import style from '../css/menu.css';

class Menu extends Component {
  render() {
    const { menuArr, clicked } = this.props;
    return (
      <div className = { clicked? 'menu menu-on' : 'menu menu-off' }> 
        { menuArr.map(each => <a href = '#' key = { each }> { each } </a>) }
      </div>
    )
  }
}




export default Menu;
