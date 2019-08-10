import React, { Component } from 'react';
import {ListItem, ListItemContent,ListItemAction, List, Button} from 'react-mdl';
import "./alliances.css"; 
import alianzas from '../image/alianzas-v2.jpg';
import uniq from '../image/alianzauniq.png';
class Alliances extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
        className="d-block w-100 alliance--banner"
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
          
          <ListItemContent style={{margin: '35px'}}> CONVENIO ESPECÍFICO DE COOPERACIÓN ENTRE LA UNIVERSIDAD NACIONAL DE SAN ANTONIO ABAD DEL CUSCO Y LA UNIVERSIDAD NACIONAL INTERCULTURAL DE QUILLABAMBA</ListItemContent>
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
          <ListItemContent style={{margin: '35px'}}>MEMORANDUM DE ENTENDIMIENTO ENTRE LA UNIVERSIDAD NACIONAL INTERCULTURAL DE QUILLABAMBA, PERU Y LA UNIVERSIDAD DE MENDEL EN BRNO, REimgA CHECA (ESPAÑOL)</ListItemContent>
          <ListItemAction>
            <Button raised colored ripple>Descargar</Button>
          </ListItemAction>
        </ListItem>
      </List>
      <div className="alliance--div">
            <h2 className="alliance-title">Red de Universidades Interculturales</h2>
            <center>
              <Button raised colored ripple>ACTA DE CREACION DE LA RED DE UNIVERSIDADES NACIONALES INTERCULTURALES DEL PERU</Button>
            </center>
            <section className="alliance">
              <div className="alliance--content">
                <a  target="_blank" href="http://www.uniscjsa.edu.pe/">
                  <div className="alliance--card">
                    <img 
                      className="alliance--image"
                      src="https://www.carrerasadistancia.com.pe/logos/original/logo-universidad-nacional-intercultural-de-la-selva-central.png"
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="alliance--content">
                <a  target="_blank" href="http://www.unia.edu.pe/">
                  <div className="alliance--card">
                    <img 
                      className="alliance--image"
                      src="http://unia.edu.pe/images/logo-unia.png"
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="alliance--content">
                <a  target="_blank" href="http://unibagua.edu.pe/">
                  <div className="alliance--card">
                    <img 
                      className="alliance--image"
                      src="https://unibagua.edu.pe/images/LOGO_OK.png"
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
              <div className="alliance--content">
                <a  target="_blank" href="http://uniq.edu.pe">
                  <div className="alliance--card">
                    <img 
                      className="alliance--image"
                      src={uniq}
                      alt="imagen uno"
                    />
                  </div>
                </a>
              </div>
            </section>
          </div>
          <br></br>
        </div>
    )
  }
}

export default Alliances;