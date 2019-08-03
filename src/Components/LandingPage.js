import React, { Component } from 'react';
import Slider from './Slider'
import Bulletin from './Bulletin';
import Linking from './Linking';
import SimpleModal from './SimpleModal';

class LandingPage extends Component {
  render() {
    return(
        <div>
          <SimpleModal></SimpleModal>
          <Slider></Slider>
          <Bulletin/>
          <br></br>
          <Linking></Linking>
          <br></br>
        </div>
    )
  }
}

export default LandingPage;