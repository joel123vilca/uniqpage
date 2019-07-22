import React, { Component } from 'react';
import {ListItem, ListItemContent,ListItemAction, List, Button} from 'react-mdl';
import alianzas from '../image/alianzas.jpg';
class Alliances extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
        className="d-block w-100 slider"
        src={alianzas}
        alt="banner alianzas"
      />
      <h2 className="bulletin-title">Convenios de la UNIQ con otras Instituciones</h2>
      <List style={{width: '90%'}}>
        <ListItem>
          <img
            src={alianzas}
            style={{width: '30%'}}
            alt="banner alianzas"
          />
          <ListItemContent> CONVENIO ESPECÍFICO DE COOPERACIÓN ENTRE LA UNIVERSIDAD NACIONAL DE SAN ANTONIO ABAD DEL CUSCO Y LA UNIVERSIDAD NACIONAL INTERCULTURAL DE QUILLABAMBA</ListItemContent>
          <ListItemAction>
            <Button raised colored ripple>Descargar</Button>
          </ListItemAction>
        </ListItem>
        <ListItem>
          <img
            src={alianzas}
            style={{width: '30%'}}
            alt="banner alianzas"
          />
          <ListItemContent>MEMORANDUM DE ENTENDIMIENTO ENTRE LA UNIVERSIDAD NACIONAL INTERCULTURAL DE QUILLABAMBA, PERU Y LA UNIVERSIDAD DE MENDEL EN BRNO, REimgA CHECA (ESPAÑOL)</ListItemContent>
          <ListItemAction>
            <Button raised colored ripple>Descargar</Button>
          </ListItemAction>
        </ListItem>
      </List>
      <h2 className="bulletin-title">Red de Universidades Interculturales</h2>
      <img
        src={alianzas}
        style={{width: '30%'}}
        alt="banner alianzas"
      />
      <img
        src={alianzas}
        style={{width: '30%'}}
        alt="banner alianzas"
      />
      <br></br>
    </div>
    )
  }
}

export default Alliances;