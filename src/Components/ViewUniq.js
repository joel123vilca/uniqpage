import React, { Component } from 'react';
import universidad from '../image/universidad.jpg';
class ViewUniq extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={universidad}
          alt="banner universidad"
        />
    </div>
    )
  }
}

export default ViewUniq;