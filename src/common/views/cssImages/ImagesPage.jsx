import React, { Component } from 'react';
import Tribune from './components/Tribune';
import KanyeBear from './components/KanyeBear';
import Koala from './components/Koala';
import Diamond from './components/Diamond';
import Nirvana from './components/Nirvana';


class ImagePage extends Component {
  render() {
    return (
      <>
        <KanyeBear />
        <Tribune />
        <Nirvana />
        <Koala />
        <Diamond />
      </>
    )
  }
}




export default ImagePage;
