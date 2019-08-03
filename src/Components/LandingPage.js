import React, { Component } from 'react';
import Slider from './Slider'
import Bulletin from './Bulletin';
import Linking from './Linking';

class LandingPage extends Component {
  render() {
    return(
        <div>
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