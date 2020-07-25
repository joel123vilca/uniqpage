import React, { Component } from 'react';
import Slider from './Slider'
import Bulletin from './Bulletin';
import Linking from './Linking';
import SimpleModal from './SimpleModal';
import Activities from './Activities';
import Buscado from './Buscado';

class LandingPage extends Component {
  render() {
    return(
        <div>
          <SimpleModal></SimpleModal>
          <Slider></Slider>
          <Bulletin/>
          <Buscado/>
          <Linking></Linking>
          <br></br>
        </div>
    )
  }
}

export default LandingPage;