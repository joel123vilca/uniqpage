import React, { Component } from 'react';
import Slider from './Slider'
import Bulletin from './Bulletin';
import Linking from './Linking';
import SimpleModal from './SimpleModal';
import Activities from './Activities';

class LandingPage extends Component {
  render() {
    return(
        <div>
          <SimpleModal></SimpleModal>
          <Slider></Slider>
          <Bulletin/>
          <br></br>
          <Activities />
          <Linking></Linking>
          <br></br>
        </div>
    )
  }
}

export default LandingPage;