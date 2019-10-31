import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showQuotations } from '../actions';
import "./alliances.css";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Paper from '@material-ui/core/Paper';

class Quotations extends Component {
  componentWillMount() {
    this.props.showQuotations()
  }

  handleDelete = () => {
    console.log('abierto')
  };
  renderAlliancesList() {
    return this.props.quotations.map((quotation) => {
      return (
          <div key={quotation.id}>
              <Card  style={{minWidth:'100%'}}>
         <CardContent>
             <div>
             <Typography  gutterBottom variant="h6" style={{textAlign: 'justify'}}>
            Nº: {quotation.number} - {quotation.year}
           </Typography>
           <Typography  variant="body1" style={{textAlign: 'justify'}}>
            Fecha de Publicación: {quotation.publication_date} 
           </Typography>
             </div>
           <br></br>
            <Typography  component="h3" style={{textAlign: 'justify',fontSize: '1.125rem'}}>
                {quotation.title}
            </Typography>
            <br></br>
           { quotation.state === 'Abierto' &&
            <Chip
                label={quotation.state}
                clickable
                color="primary"
                onDelete={this.handleDelete}
                deleteIcon={<DoneIcon />}
                variant="outlined"
            />
            } 
            { quotation.state === 'Cerrado' &&
            <Chip
                label={quotation.state}
                clickable
                color="secondary"
                onDelete={this.handleDelete}
                variant="outlined"
            />
            } 
         </CardContent>
         <CardActions>
            <Button 
                variant="contained" 
                style={{color:'white', background:'#376970'}}
                target="_blank" 
                href={quotation.request_file_path}
            >
                <CloudDownloadIcon />
                Solicitud
            </Button>
        </CardActions>
       </Card>
        <br></br>
          </div>
      )
    })
  }
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <h2 className="bulletin-title">Convocatorias de cotización</h2>
      <center>
      <Paper style={{textAlign: 'justify', width: '50%', color:'white', background:'#376970'}}>
        <Typography component="p">
        "LAS COTIZACIONES SON VALIDAS DENTRO DE LOS 3 DIAS HÁBILES CONTADOS A PARTIR DEL DIA SIGUIENTE DE SU PUBLICACIÓN.
        </Typography>
        <Typography component="p">
        LA COTIZACIONES 
        SERÁN RECIBIDAS A TRAVÉS DE MESA DE PARTES - UNIQ O AL CORREO ELECTRONICO abastecimientos@uniq.edu.pe".
        </Typography>
      </Paper>
      <br></br>
      <div style={{width: '50%'}}>
        { this.renderAlliancesList() } 
      </div>
      </center>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quotations: state.quotations.quotations
  }
}

export default connect(mapStateToProps, { showQuotations })(Quotations)