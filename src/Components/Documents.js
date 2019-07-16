import React, { Component } from 'react';
import documents from '../image/docuemntos.jpg';
class Documents extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={documents}
          alt="banner documentos"
        />
    </div>
    )
  }
}

export default Documents;