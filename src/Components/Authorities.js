import React, { Component } from 'react';
import autoridades from '../image/autoridades.jpg';
import "./authorities.css";
class Authorities extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <img
          className="d-block w-100 slider"
          src={autoridades}
          alt="banner autoridades"
        />
        <div className="container">
          <img src="https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-512.png" alt="Avatar" className="image"/>
          <div className="middle">
          <div className="text">John Doe</div>
        </div>
      </div>
    </div>
    )
  }
}

export default Authorities;