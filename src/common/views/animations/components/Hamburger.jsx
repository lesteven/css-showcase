import React, { Component } from 'react';
import style from '../css/hamburger.css';

class Hamburger extends Component {
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
      <div className = 'hamburger-wrapper'>
        <div className = {clicked? 'hamburger-box hamburger-clicked' :
            'hamburger-box ' } onClick = { this.click }>
          <div className = 'hamburger-bar bar-top'></div>
          <div className = 'hamburger-bar bar-mid'></div>
          <div className = 'hamburger-bar bar-bot'></div>
        </div>
      </div>
    )
  }
}




export default Hamburger;
