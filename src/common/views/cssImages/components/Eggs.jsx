import React, { Component } from 'react';
import style from '../css/eggs.css';
import style2 from '../css/pancakes.css';

const Egg = (props) => {
  return (
    <div className = {`egg ${props.pos}`}>
      <div className = 'egg-yolk'></div>
    </div>
  )
}

const Pancakes = (props) => {
  return (
    <div className = {`pancake ${props.pos}`}>
      <div className = 'pancake-inner'></div>
    </div>  
  )
}

class Eggs extends Component {
  render() {
    return (
      <div className = 'egg-wrapper'>
        <div className = 'egg-box'>
          <div className = 'pan-handle'>
            <div className = 'handle-top'></div>
            <div className = 'handle-bottom'></div>
          </div>
          <div className = 'pan'>
            <div className = 'pan-inner'>
              <Egg pos = 'egg-left'/>
              <Egg pos = 'egg-right'/>
              <Egg pos = 'egg-bot-left'/>
              <Egg pos = 'egg-bot-right'/>
            </div>
          </div>
          <div className = 'pancake-box'>
            <div className = 'plate-inner'></div>
            <Pancakes pos = 'pancake-left'/> 
            <Pancakes pos = 'pancake-right'/> 
            <div className = 'butter'></div>
          </div>
        </div>
      </div>
    )
  }
}




export default Eggs;

