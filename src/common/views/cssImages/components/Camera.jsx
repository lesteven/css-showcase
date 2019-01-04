import React, { Component } from 'react';
import style from '../css/camera.css';

const Lense = () => {
  return (
    <div className = 'camera-lense'>
      <div className = 'lense-two'>
        <div className = 'lense-two l-three'>
          <div className = 'lense-two l-four'>
            <div className = 'lense-two l-five'>
              <div className = 'lense-two l-six'>
                <div className = 'lense-two l-seven'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
const CameraTop = () => {
  return (
    <div className = 'camera-top'>
      <div className = 'camera-top-right'></div>
      <div className = 'camera-right-button'></div>
      <div className = 'camera-mid-button'>
        <div className = 'mid-grip'></div>
      </div>
      <div className = 'camera-left-button'></div>
      <div className = 'camera-flash'></div>
      <div className = 'camera-logo'></div>
    </div>
  )
}

class Camera extends Component {
  render() {
    return (
      <div className = 'camera-wrapper'>
        <div className = 'camera-box'>
          <div className = 'camera-body'>
            <CameraTop />
            <Lense />
          </div>
        </div>
      </div>
    )
  }
}




export default Camera;

