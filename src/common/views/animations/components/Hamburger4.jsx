import React, { Component } from 'react';
import style from '../css/hamburger4.css';
import Menu from './Menu';


class Hamburger4 extends Component {
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
    const { menuArr } = this.props;
    const { clicked } = this.state;
    return (
      <>
        <Menu menuArr = { menuArr }
              clicked = { clicked }
              click = { this.click }
          />
        <div className = 'ham4-wrapper'>
          <div className = {clicked? 
            'hamburger4-box hamburger4-box-clicked':'hamburger4-box' }
              onClick = { this.click }>
            <span className = 'ham4'></span>
          </div>
        </div>
      </>
    )
  }
}




export default Hamburger4;

