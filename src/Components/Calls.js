import React, { Component } from 'react';
import convocatoria from '../image/convocatoria-v2.jpg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import TabsConvocatoria from './TabsConcocatoria';

class Calls extends Component {
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <img
                className="d-block w-100 slider"
                src={convocatoria}
                alt="banner convocatoria"
            />
            <br></br>
            <AppBar position="static" style={{ background: '#376970'}}>
                <Toolbar>
                    <Typography variant="h6">
                    Enlaces Importante
                    </Typography>
                </Toolbar>
            </AppBar>
            <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
        >
          <ListItemIcon>
            <a href="http://convocatorias.uniq.edu.pe" target="_blank" style={{color:'blue'}}>
            <CheckCircleSharpIcon  />
            </a>
          </ListItemIcon>
          <ListItemText primary="INGRESO AL SISTEMA DE POSTULACIÓN CAS" />
        </ListItem>
        <ListItem
          button
        >
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="Bases Generales de Convocatoria CAS" />
        </ListItem>
        <ListItem
          button
        >
          <ListItemIcon>
          <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="Reglamento CAS" />
        </ListItem>
        <ListItem
          button
        >
          <ListItemIcon>
          <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="Anexo Cumplimiento de Requisitos" />
        </ListItem>
        <ListItem
          button
        >
          <ListItemIcon>
            <PictureAsPdfIcon  />
          </ListItemIcon>
          <ListItemText primary="Documentos a presentar por los ganadores
-" />
        </ListItem>
        <ListItem
          button
        >
          <ListItemIcon>
          <a href="http://convocatorias.uniq.edu.pe" target="_blank" style={{color:'blue'}}>
            <CheckCircleSharpIcon  />
            </a>
          </ListItemIcon>
          <ListItemText primary="Ficha del postulante" />
        </ListItem>
        
      </List>
            <br></br>
            <TabsConvocatoria />
            <br></br>
        </div>
        )
    }
}

export default Calls;