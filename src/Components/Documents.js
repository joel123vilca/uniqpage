import React, { Component } from 'react';
import documents from '../image/documentos-v2.jpg';
import ListDocuments from './ListDocuments';
class Documents extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={documents}
          alt="banner documentos"
        />
        <br></br>
        <ListDocuments></ListDocuments>
    </div>
    )
  }
}

export default Documents;