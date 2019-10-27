import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem, ListItemContent,ListItemAction, List, Button,} from 'react-mdl';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { showAlliances } from '../actions';
import "./alliances.css"; 
import alianzas from '../image/alianzas-v2.jpg';
import uniq from '../image/alianzauniq.png';

class Alliances extends Component {
  componentWillMount() {
    this.props.showAlliances()
  }
  renderAlliancesList() {
    return this.props.alliances.map((alliance) => {
      return (
        <ListItem key={alliance.id}>
          <img
            src={alliance.image_path}
            style={{width: '30%'}}
            alt="banner alianzas"
          />
          
          <ListItemContent style={{margin: '35px'}}>{alliance.title}</ListItemContent>
          <ListItemAction>
              <IconButton href={alliance.pdf_path} target="_blank"  edge="end">
                <Icon style={{ fontSize: 50 , color: 'teal'}}>picture_as_pdf</Icon>
              </IconButton>
          </ListItemAction>
        </ListItem>
      )
    })
  }
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
      { this.renderAlliancesList() } 
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
          <br></br>
          <br></br>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    alliances: state.alliance.alliances
  }
}

export default connect(mapStateToProps, { showAlliances })(Alliances)