import React, { Component } from 'react';
import Slider from './Slider'
import Activities from './Activities';
import Bulletin from './Bulletin';
import Linking from './Linking';

class LandingPage extends Component {
  render() {
    return(
        <div>
          <Slider></Slider>
          <Bulletin/> 
          <Activities/>
          <Linking></Linking>
        </div>
    )
  }
}

export default LandingPage;