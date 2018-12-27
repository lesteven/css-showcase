import React, { Component } from 'react';
import styles from '../css/koala.css';


class Koala extends Component {
  render() {
    return (
      <div className = 'koala-wrapper'>
        <div className = 'koala-box'>
          <div className = 'koala-head'>
            <div className = 'koala-ear ear-left'>
              <div className = 'inner-ear'></div>
            </div>
            <div className = 'koala-ear ear-right'>
              <div className = 'inner-ear'></div>
            </div>
            <div className = 'koala-head-layer'></div>
            <div className = 'koala-eye eye-left'>
              <div className = 'koala-pupil'></div>
            </div>
            <div className = 'koala-eye eye-right'>
              <div className = 'koala-pupil'></div>
            </div>
            <div className = 'koala-nose'></div>
            <div className = 'koala-hair hair-left'></div>
            <div className = 'koala-hair hair-right'></div>
          </div>
        </div>
      </div>
    )
  }
}




export default Koala;
