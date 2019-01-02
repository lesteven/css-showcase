import React, { Component } from 'react';
import style from '../css/kanye-bear.css';

class KanyeBear extends Component {
  render() {
    return (
      <div className = 'kanye-wrapper'>
        <div className = 'kanye-box'>
          <div className = 'kanye-head'>
            <div className = 'kanye-ear kanye-ear-left'>
              <div className = 'kanye-inner-ear'></div>
            </div>
            <div className = 'kanye-ear kanye-ear-right'>
              <div className = 'kanye-inner-ear'></div>
            </div>
            <div className = 'kanye-head-layer'></div>
            <div className = 'kanye-eye kanye-eye-left'>
              <div className = 'kanye-eye-iris kanye-iris-left'>
                <div className = 'kanye-iris-two iris-two-left'></div>
                <div className = 'kanye-pupil kanye-pupil-left'></div>
              </div>
              <div className = 'kanye-long-light long-left'></div>
              <div className = 'kanye-short-light short-left'></div>
            </div>
            <div className = 'kanye-eye kanye-eye-right'>
              <div className = 'kanye-eye-iris kanye-iris-right'>
                <div className = 'kanye-iris-two iris-two-right'></div>
                <div className = 'kanye-pupil kanye-pupil-right'></div>
              </div>
              <div className = 'kanye-long-light long-right'></div>
              <div className = 'kanye-short-light short-right'></div>
            </div>
            <div className = 'kanye-mouth'>
              <div className = 'kanye-nose'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default KanyeBear;

