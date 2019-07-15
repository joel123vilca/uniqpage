import React, { Component } from 'react';
import mision from '../image/mision.jpg';
class Mision extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={mision}
          alt="banner mision"
        />
    </div>
    )
  }
}

export default Mision;