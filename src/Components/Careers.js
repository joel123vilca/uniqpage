import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Careers extends Component {
  render() {
    return(
        <Grid style={{background: 'url(https://i.pinimg.com/564x/c9/89/a0/c989a0dc7eb64c294e6628a663453f5f.jpg) center / cover', height:'400px'}}>
                <h2>Escuelas</h2>
                <Cell col={12} className="banner-text">
                <p>escuelas</p>
                </Cell>
        </Grid>
    )
  }
}

export default Careers;