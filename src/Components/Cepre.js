import React, { Component } from 'react';
import {Grid,Paper,Fab,Link} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import EventIcon from '@material-ui/icons/Event';
import FolderIcon from '@material-ui/icons/Folder';
import GroupIcon from '@material-ui/icons/Group';
import SchoolIcon from '@material-ui/icons/School';
import CreateIcon from '@material-ui/icons/Create';
import "./Cepre.css";
// import { Tab, Tabs,Grid,Cell} from 'react-mdl';
import bannerCivil from '../image/CEPRE_2020.jpg';
class Cepre extends Component {

    render() {
      return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <img
                className="d-block w-100 slider"
                src={bannerCivil}
                alt="banner carrera"
                />
            </Grid>
            <Grid item xs={12}>
                <h2 className="subtitle-color">CICLO 2020 I</h2>
            </Grid>
            <Grid item xs={12}>
                <Paper >
                <Grid container>
                <Grid item sm={4} xs={12}>
                    <Grid container>
                        <Grid item sm={4} xs={5}>
                            <Fab className="yellow-fab width-80" aria-label="add">
                                <ListIcon className="color-icon"/>
                            </Fab>
                        </Grid>
                        <Grid item sm={8} xs={7}>
                        <Link href="http://admisionapi.uniq.edu.pe/public/documentos/ESTUDIANTES%20CEPRE%202020-I.pdf" target="__blank">
                            <p className="text-info yellow-text">ESTUDIANTES</p>
                        </Link>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item sm={4} xs={12}>
                    <Grid container>
                        <Grid item sm={4} xs={5}>
                            <Fab className="green-fab width-80" aria-label="add">
                                <EventIcon className="color-icon"/>
                            </Fab>
                        </Grid>
                        <Grid item sm={8} xs={7}>
                            <Link href="http://admisionapi.uniq.edu.pe/public/documentos/DOCENTES%20CEPRE%202020-I.pdf" target="__blank">
                                <p className="text-info green-text">DOCENTES</p>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid container>
                        <Grid item sm={4} xs={5}>
                            <Fab className="red-fab width-80" aria-label="add">
                                <SchoolIcon className="color-icon"/>
                            </Fab>
                        </Grid>
                        <Grid item sm={8} xs={7}>
                            <Link href="http://admisionapi.uniq.edu.pe/public/documentos/Resolución%20N°177-2019-CO-UNIQ-páginas-9-26.pdf" target="__blank">
                                <p className="text-info red-text">REGLAMENTO</p>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid container>
                        <Grid item sm={4} xs={5}>
                            <Fab className="red-fab width-80" aria-label="add">
                                <GroupIcon className="color-icon"/>
                            </Fab>
                        </Grid>
                        <Grid item sm={8} xs={7}>
                            <p className="text-info red-text">VACANTES</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid container>
                        <Grid item sm={4} xs={5}>
                            <Fab className="sky-blue-fab width-80" aria-label="add">
                                <FolderIcon className="color-icon"/>
                            </Fab>
                        </Grid>
                        <Grid item sm={8} xs={7}>
                            <Link href="http://admisionapi.uniq.edu.pe/public/documentos/Resolución%20N°177-2019-CO-UNIQ-páginas-3-8.pdf" target="__blank">
                                <p className="text-info sky-blue-text">PLAN DE FUNCIONAMIENTO</p>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid container>
                        <Grid item sm={4} xs={5}>
                            <Fab className="violet-fab width-80" aria-label="add">
                                <CreateIcon className="color-icon"/>
                            </Fab>
                        </Grid>
                        <Grid item sm={8} xs={7}>
                            <Link href="http://admision.uniq.edu.pe/preinscripcion" target="__blank">
                                <p className="text-info violet-text">INSCRIPCIÓN</p>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
                </Paper>
            </Grid>
        </Grid>
      )
    }
  }
  
  export default Cepre;