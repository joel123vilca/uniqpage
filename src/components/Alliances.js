import React, { Component } from 'react';
import alianzas from '../image/alianzas.jpg';
class Alliances extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={alianzas}
          alt="banner alianzas"
        />
    </div>
    )
  }
}

export default Alliances;