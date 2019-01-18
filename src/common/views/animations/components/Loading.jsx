import React, { Component } from 'react';
import style from '../css/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className = 'loading-wrapper'>
        <div className = 'load-box'>
        <div className = 'loading'></div>
        </div>
      </div>
    )
  }
}




export default Loading;
