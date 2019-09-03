import React, { Component } from 'react';
import docentes from '../image/docentes.jpg';
import "./teacher.css";
import TeacherList from './TeacherList';

class Teachers extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <img
            className="d-block w-100 teacher--banner"
            src={docentes}
            alt="banner docentes"
        />
        <TeacherList />
    </div>
    )
  }
}

export default Teachers;