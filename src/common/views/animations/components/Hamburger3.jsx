import React, { Component } from 'react';
import style from '../css/hamburger3.css';

class Hamburger3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }
  click = () => {
    this.setState({ clicked : !this.state.clicked });
    
  }
  render() {
    const { clicked } = this.state;
    return (
      <div className = 'ham3-wrapper'>
        <div className = {clicked? 
          'hamburger3-box hamburger3-box-clicked':'hamburger3-box' }
            onClick = { this.click }>
          <span className = 'ham3'></span>
        </div>
      </div>
    )
  }
}




export default Hamburger3;

