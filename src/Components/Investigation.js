import React, { Component } from 'react';
import investigacion from '../image/investigacion.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import './investigation.css'

class Investigation extends Component {
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <img
                className="d-block w-100 investigation--banner"
                src={investigacion}
                alt="banner investigacion"
            />
            <div>
              <Grid container spacing={2} className="investigation--content">
                <Grid item xs={12}>
                  <Paper ></Paper>
                </Grid>
                <Grid  xs={12} sm={7}>
                  <p className="investigation--description">Una línea de investigación se define como un eje ordenador de la actividad de investigación, posee una base razonada que permite la integración y la continuidad de los esfuerzos de uno o más investigadores, equipos o instituciones comprometidas en el desarrollo del conocimiento, con avances teóricos, tecnológicos y de innovación en un ámbito específico, considerado también como niveles de concreción y especificidad que señalan problemas concretos cuya necesidad de ser resueltos es evidente y de alguna manera requerida por un sector del entorno.</p>
                </Grid>
                <Grid container xs={12} sm={5}>
                  <Avatar alt="Remy Sharp" src={investigacion} style={{marginLeft: '30px', width: '300px', height: '300px'}} />
                </Grid>
                <Grid container xs={12} sm={5}>
                  <Avatar alt="Remy Sharp" src={investigacion} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                </Grid>
                <Grid item xs={12} sm={7}>
                  <h4 className="investigation--title">1. LÍNEAS DE INVESTIGACIÓN INSTITUCIONALES</h4>
                  <p className="investigation--description" >Las líneas de investigación institucionales en la UNIQ son temas que responden a las necesidades de investigación de la zona andino amazónica de la región Cusco por su pertinencia social e interés académico y que se aborda desde una o varias áreas del conocimiento por un grupo de investigación.</p>
                  <h4 className="investigation--title">1.1. INNOVACIÓN Y DESARROLLO TECNOLÓGICO DEL CACAO Y SUS DERIVADOS</h4>
                  <p className="investigation--description" >Las líneas de investigación institucionales en la UNIQ son temas que responden a las necesidades de investigación de la zona andino amazónica de la región Cusco por su pertinencia social e interés académico y que se aborda desde una o varias áreas del conocimiento por un grupo de investigación.</p>
                  <h4 className="investigation--title">1.2. INNOVACIÓN Y DESARROLLO TECNOLÓGICO DEL CAFÉ Y SUS DERIVADOS</h4>
                  <p className="investigation--description" >Las líneas de investigación institucionales en la UNIQ son temas que responden a las necesidades de investigación de la zona andino amazónica de la región Cusco por su pertinencia social e interés académico y que se aborda desde una o varias áreas del conocimiento por un grupo de investigación.</p>
                  <h4 className="investigation--title">1.3. INNOVACIÓN Y DESARROLLO DE LA CONSTRUCCIÓN EN SELVA</h4>
                  <p className="investigation--description" >Las líneas de investigación institucionales en la UNIQ son temas que responden a las necesidades de investigación de la zona andino amazónica de la región Cusco por su pertinencia social e interés académico y que se aborda desde una o varias áreas del conocimiento por un grupo de investigación.</p>
                  <h4 className="investigation--title">1.4. INNOVACIÓN Y DESARROLLO DEL TURISMO EN LA CONVENCIÓN</h4>
                  <p className="investigation--description" >Las líneas de investigación institucionales en la UNIQ son temas que responden a las necesidades de investigación de la zona andino amazónica de la región Cusco por su pertinencia social e interés académico y que se aborda desde una o varias áreas del conocimiento por un grupo de investigación.</p>
                  <h4 className="investigation--title">1.5. DESARROLLO DE ESPECIES ACUÍCOLAS EN SELVA ALTA</h4>
                  <p className="investigation--description" >Las líneas de investigación institucionales en la UNIQ son temas que responden a las necesidades de investigación de la zona andino amazónica de la región Cusco por su pertinencia social e interés académico y que se aborda desde una o varias áreas del conocimiento por un grupo de investigación.</p>
                  
                </Grid>
              </Grid>
            </div>
        </div>
        )
    }
}

export default Investigation;