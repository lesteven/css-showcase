import React, { Component } from 'react';
import Tribune from './components/Tribune';
import KanyeBear from './components/KanyeBear';
import Koala from './components/Koala';
import Diamond from './components/Diamond';
import Nirvana from './components/Nirvana';
import Eggs from './components/Eggs';
import Camera from './components/Camera';

class ImagePage extends Component {
  render() {
    return (
      <>
        <KanyeBear />
        <Camera />
        <Eggs />
        <Nirvana />
        <Tribune />
        <Koala />
        <Diamond />
      </>
    )
  }
}




export default ImagePage;
