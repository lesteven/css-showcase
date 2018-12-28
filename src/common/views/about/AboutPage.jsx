import React, { Component } from 'react';
import styles from './css/aboutPage.css';
import data from './data';
class AboutPage extends Component {
  render() {
    return (
      <div className = 'about-me'>
        { data.map((each, index) => 
          <p key = { index }> { each } </p> ) }        
        <p>You could also visit my portfolio  
            <a href = 'https://imstevenle.com'> here </a>
          if you want to check out my other work.
        </p>
      </div>  
    )
  }
}

export default AboutPage;
