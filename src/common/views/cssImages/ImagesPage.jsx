import React, { Component } from 'react';
import Tribune from './components/Tribune';
import KanyeBear from './components/KanyeBear';
import Koala from './components/Koala';
import Diamond from './components/Diamond';

class ImagePage extends Component {
  render() {
    return (
      <>
        <KanyeBear />
        <Tribune />
        <Koala />
        <Diamond />
      </>
    )
  }
}




export default ImagePage;
