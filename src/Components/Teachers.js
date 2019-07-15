import React, { Component } from 'react';
import docentes from '../image/docentes.jpg';
class Teachers extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={docentes}
          alt="banner docentes"
        />
    </div>
    )
  }
}

export default Teachers;