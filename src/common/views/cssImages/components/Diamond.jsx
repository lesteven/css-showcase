import React, { Component } from 'react';
import styles from '../css/diamond.css';

class Diamond extends Component {
  render() {
    return (
      <div className = 'diamond-wrapper'>
        <div className = 'diamond-box'>
          <div className = 'diamond-bottom-large'>
            <div className = 'diamond-bottom-top'></div>
          </div>
          <div className = 'diamond-square'>
            <div className = 'diamond-mid-triangle'></div>
          </div>
          <div className = 'diamond-top-left'></div>
          <div className = 'diamond-top-right'></div>
        </div>
      </div>
    )
  }
}




export default Diamond;

