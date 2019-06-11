import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Slider extends Component {
    render(){
      return (
        <AwesomeSlider className="aws-btn">
          <div data-src="http://uniq.edu.pe/public/img/imagenes/uniq/universidad.jpg" style={{height: '300px', position: 'relative'}}/>
          <div data-src="http://uniq.edu.pe/public/img/imagenes/uniq/universidad.jpg" style={{height: '300px', position: 'relative'}} />
          <div data-src="http://uniq.edu.pe/public/img/imagenes/uniq/universidad.jpg" style={{height: '300px', position: 'relative'}} />
        </AwesomeSlider>
      );
    }
}

export default Slider;