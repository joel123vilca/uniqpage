import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem,ListItemAction, List} from 'react-mdl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { showResolutions, searchResolutions} from '../actions';
import "./resolutions.css"; 
import memorandon from '../image/memorandon.pdf';

class Corona extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  
  renderResolutionList() {
      return (
        <Grid item xs={12} sm={6}>
          <div className="resolution--div">
            <h5 className="resolution--title">MEMORÁNDUM MÚLTIPLE Nº 009-2020-P-CO-UNIQ</h5>
            <p className="resolution--description" >
            Se pone en conocimiento de todo el personal docente y administrativo que deberán ponerse en
contacto con sus Jefes inmediatos superiores para la coordinación de labores a realizar durante el
periodo de aislamiento social, conforme a la resolución N° 048-2020-CCO-UNIQ. Así mismo, el día de
mañana se sostendrán reuniones virtuales con cada Jefe de Área o Unidad a partir de las 09 horas.
A las 11 horas del miércoles 18 de marzo se desarrollara el Consejo de la Comisión Organizadora para
el inicio de la revisión de la propuesta de ROF. Los Jefes de Área y Unidad deberán estar pendientes
ante cualquier requerimiento de información o precisión que se requiera, sobre las funciones y personal
con que se cuenta o debe contar en su Unidad o Área.
            </p>
            <a href={memorandon} target="_blank"  edge="end" className="resolution--button">
              <Button variant="contained" style={{ fontSize: 15, color: 'white',background:'teal'}}>
                DESCARGAR
              </Button>
            </a>
          </div>
        </Grid>
      )
  }
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <h2 className="bulletin-title">DISPOSICIONES - UNIQ EN EL PERIODO DE AISLAMIENTO SOCIAL Y CUMPLIMIENTO DE TELE-TRABAJO</h2>
      
      <Grid container spacing={3}>
      { this.renderResolutionList() }
      </Grid>
        <br></br>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resolutions: state.resolutions.resolutions,
    resultResolutions: state.resolutions.resultResolutions
  }
}

export default connect(mapStateToProps, { showResolutions, searchResolutions })(Corona);