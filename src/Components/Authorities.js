import React, { Component } from 'react';
import autoridades from '../image/autoridades.jpg';
class Authorities extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={autoridades}
          alt="banner autoridades"
        />
    </div>
    )
  }
}

export default Authorities;