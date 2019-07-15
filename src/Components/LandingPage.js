import React, { Component } from 'react';
import Slider from './Slider'
import Events from './Events';
import Bulletin from './Bulletin';
class LandingPage extends Component {
  render() {
    return(
        <div>
          <Slider></Slider>
          <Bulletin/> 
          <Events/>
        </div>
    )
  }
}

export default LandingPage;