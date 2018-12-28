import React, { Component } from 'react';
import style from '../css/tribune.css';

class Tribune extends Component {
  render() {
    return (
      <div className = 'tribune-wrapper'>
        <div className = 'tribune-box'>
          <div className = 'cloud cloud-left'></div>
          <div className = 'cloud cloud-right'></div>
          <div className = 'tribune-tower'>
            <div className = 'big-window big-window-left'></div>
            <div className = 'big-window big-window-mid'></div>
            <div className = 'big-window big-window-right'></div>

            <div className = 'small-window window-left'></div>
            <div className = 'small-window window-mid'></div>
            <div className = 'small-window window-right'></div>
          </div>
          <div className = 'tribune-logo'>
            <h1> TRIBUNE </h1>
          </div>
          <div className = 'tribune-top'> 
            <div className = 'tribune-clock'></div> 
          </div>
          <div className = 'tribune-triangle'>
            <div className = 'tribune-dot dot-bot-left'></div>
            <div className = 'tribune-dot dot-bot-right'></div>
            <div className = 'tribune-dot dot-mid'></div>
            <div className = 'tribune-dot dot-top'></div>
          </div>
        </div>
      </div>
    )
  }
}




export default Tribune;

