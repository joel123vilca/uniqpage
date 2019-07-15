import React, { Component } from 'react';
import interculturalidad from '../image/interculturalidad.jpg'; 
class Culture extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <img
            className="d-block w-100 slider"
            src={interculturalidad}
            alt="banner interculturalidad"
          />
      </div>
    )
  }
}

export default Culture;