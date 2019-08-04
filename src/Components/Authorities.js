import React, { Component } from 'react';
import {Card, CardActions, Grid, CardText,CardTitle, Cell, Button} from 'react-mdl';
import autoridades from '../image/autoridades-v2.jpg';
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
      <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <h2 className="bulletin-title">La comisión Organizadora</h2>
        <CardText style={{ textIndent: '50px', textAlign: 'justify',letterSpacing: '1px', alignItems:'center'}}>
        La Comisión Organizadora, es un órgano de gestión de naturaleza temporal, constituido por el Ministerio de Educación e integrado por tres académicos de reconocido prestigio, a dedicación exclusiva, que tiene a su cargo la aprobación del estatuto, reglamentos y documentos de gestión académica y administrativa de la universidad, formulados en los instrumentos de planeamiento, así como su conducción y dirección hasta que se constituyan los órganos de gobierno de la universidad. Asimismo, de conformidad con la Vigésima Sexta Disposición Complementaria Final de la Ley N° 29626, las universidades con comisiones organizadoras constituyen pliegos presupuestarios, 
        sujetándose a las leyes anuales de presupuesto del sector público. Su funcionamiento se rige conforme a la Ley N° 30220 y Resolución Viceministerial N° 088-2017-MINEDU y el Estatuto Universitario. 
        </CardText>
          <CardActions border>
          La actual comisión organizadora fue nombrada mediante-
        <Button colored>RESOLUCIÓN VICEMINISTERIAL N° 089-2019-MINEDU</Button>
        </CardActions>
      </Card>
      <div style={{width: '80%', margin: 'auto'}}>
        <Grid className="demo-grid-1">
          <Cell col={4}>
            <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
              <img class="autoridad" src="http://uniq.edu.pe/public/img/imagenes/comision_organizadora/dr_Roosevelt_Benel_Villalobos_Diaz.jpeg" alt="Mountains"/>
              <CardTitle style={{color: '#fff',background: '#61BD99', textAlign: 'center'}}>Vicepresidente Académico de la Comisión Organizadora de la UNIQ</CardTitle>
              <CardActions border>
              <Button colored>Dr. Roosevelt Benel Villalobos Diaz</Button>
              </CardActions>
              <CardText>
              roosevelt.villalobos@uniq.edu.pe
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
              <img class="autoridad" src="http://uniq.edu.pe/public/img/imagenes/comision_organizadora/dr_Oswaldo_Luizar_Obregon.jpeg" alt="Mountains"/>
              <CardTitle style={{color: '#fff',background: '#61BD99', textAlign: 'center'}}>Presidente de la Comisión Organizadora de la UNIQ</CardTitle>
              <CardActions border>
              <Button colored>Dr. Oswaldo Luizar Obregon</Button>
              </CardActions>
              <CardText>
                oswaldo.luizar@uniq.edu.pe
              </CardText>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card shadow={0} style={{width: '300px', margin: 'auto'}}>
              <img class="autoridad" src="http://uniq.edu.pe/public/img/imagenes/comision_organizadora/dr_Manuel_Antonio_Canto_Saenz.jpeg" alt="Mountains"/>
              <CardTitle style={{color: '#fff',background: '#61BD99', textAlign: 'center'}}>Vicepresidente de Investigación de la Comisión Organizadora de la UNIQ</CardTitle>
              <CardActions border>
              <Button colored>Dr. Manuel Antonio Canto Saenz</Button>
              </CardActions>
              <CardText>
              manuel.canto@uniq.edu.pe
              </CardText>
            </Card>
          </Cell>
        </Grid>
      </div>
  </div>
    )
  }
}

export default Authorities;