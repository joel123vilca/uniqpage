import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Contact from './Contact'
import Slider from './Slider'
class Main extends Component {
  render() {
    return(
        <div>
            <Slider></Slider> 
            <Contact></Contact>
        </div>
    )
  }
}

export default Main;