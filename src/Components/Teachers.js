import React, { Component } from 'react';
import {  Grid, Cell, Card, CardTitle, CardActions, Button,CardText } from 'react-mdl';
import docentes from '../image/docentes.jpg';
import "./teacher.css";
class Teachers extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <img
            className="d-block w-100 slider"
            src={docentes}
            alt="banner docentes"
          />
        <img
            className="d-block w-100 slider"
            src={docentes}
            alt="banner docentes"
          />
        <Grid className="demo-grid-1">
          {/* <Cell col={3}></Cell>
          <Cell col={3}></Cell>
          <Cell col={3}></Cell>
          <Cell col={3}></Cell> */}
        </Grid>
    </div>
    )
  }
}

export default Teachers;