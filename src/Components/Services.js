import React, { Component } from 'react';
import servicios from '../image/servicios.jpg';

class Services extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={servicios}
          alt="banner documentos"
        />
        <br></br>
    </div>
    )
  }
}

export default Services;