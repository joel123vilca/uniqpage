import React, { Component } from 'react';
import Slider from './Slider'
import Activities from './Activities';
import Bulletin from './Bulletin';
class LandingPage extends Component {
  render() {
    return(
        <div>
          <Slider></Slider>
          <Bulletin/> 
          <Activities/>
        </div>
    )
  }
}

export default LandingPage;