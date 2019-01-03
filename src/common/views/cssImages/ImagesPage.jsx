import React, { Component } from 'react';
import Tribune from './components/Tribune';
import KanyeBear from './components/KanyeBear';
import Koala from './components/Koala';
import Diamond from './components/Diamond';
import Nirvana from './components/Nirvana';
import Eggs from './components/Eggs';


class ImagePage extends Component {
  render() {
    return (
      <>
        <KanyeBear />
        <Eggs />
        <Tribune />
        <Nirvana />
        <Koala />
        <Diamond />
      </>
    )
  }
}




export default ImagePage;
