import React, { Component } from 'react';
import style from '../css/nirvana.css';

const NirvanaEye = (props) => {
  return (
    <div className = {`nirvana-eye ${props.eye}`}>
      <div className = 'nirvana-bar bar-left'></div>
      <div className = 'nirvana-bar bar-right'></div>
    </div> 
  )
}


class Nirvana extends Component {
  render() {
    return (
      <div className = 'nirvana-wrapper'>
        <div className = 'nirvana-box'>
          <div className = 'nirvana-head'>
            <div className = 'nirvana-inner-circle'>
              <NirvanaEye eye = 'nirvana-eye-left'/>
              <NirvanaEye eye = 'nirvana-eye-right'/>
              <div className = 'nirvana-lip'>
                <div className = 'nirvana-lip-two'></div>
                <div className = 'nirvana-lip-bar lip-bar-left'></div>
                <div className = 'nirvana-lip-bar lip-bar-right'></div>
                <div className = 'nirvana-tongue'>
                  <div className = 'nirvana-tongue-two'>
                    <div className = 'nirvana-tongue-line'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default Nirvana;

