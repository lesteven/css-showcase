import React, { Component } from 'react';
import style from '../css/hamburger2.css';

class Hamburger2 extends Component {
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
      <div className = 'hamburger2-wrapper'>
        <div className = {clicked? 
          'hamburger2-box hamburger2-box-clicked':'hamburger2-box' }
            onClick = { this.click }>
          <span className = 'ham2-bar'></span>
        </div>
      </div>
    )
  }
}




export default Hamburger2;

