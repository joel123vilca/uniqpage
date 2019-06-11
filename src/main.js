import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Contact from './Contact'
import Slider from './Slider'
class Main extends Component {
  render() {
    return(
        <div>
            <Slider></Slider> 
            <Grid style={{background: 'url(https://i.pinimg.com/564x/c9/89/a0/c989a0dc7eb64c294e6628a663453f5f.jpg) center / cover', height:'400px'}}>
                <h2>Boletin Informativo</h2>
                <Cell col={12} className="banner-text">
                <img 
                    src="https://media.wired.com/photos/5b36a5b6e237e87ce9592b8e/master/pass/Github-Microsoft-BIZ-FINAL.jpg"
                    alt="joel vilca"
                    className="perfil-img"
                />
                <p>HTML/CSS | Javascript | React | React-Native | Redux | Php | Mysql | Laravel</p>
                </Cell>
            </Grid>
            <Grid style={{backgroundColor: 'white', height:'400px'}}>
                <h2>ACTIVIDADES OFICIALES</h2>
                <Cell col={12}>
                <img 
                    src="https://media.wired.com/photos/5b36a5b6e237e87ce9592b8e/master/pass/Github-Microsoft-BIZ-FINAL.jpg"
                    alt="joel vilca"
                    className="perfil-img"
                />
                <p>HTML/CSS | Javascript | React | React-Native | Redux | Php | Mysql | Laravel</p>
                </Cell>
            </Grid>
            
        </div>
    )
  }
}

export default Main;