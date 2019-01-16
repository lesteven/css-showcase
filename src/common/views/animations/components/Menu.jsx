import React, { Component } from 'react';
import style from '../css/menu.css';

class Menu extends Component {
  render() {
    const { menuArr, clicked, click } = this.props;
    return (
      <div className = { clicked? 'menu menu-on' : 'menu menu-off' }
        onClick = { click } > 
        { menuArr.map(each => 
          <p key = { each }> { each } </p>) }
      </div>
    )
  }
}




export default Menu;
