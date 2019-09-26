import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import documentos from '../image/documentos-v2.jpg';
import Button from '@material-ui/core/Button';
import fondo from '../image/img_documentos.jpg';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
  },
  gridList: {
    width: 1200,
    height: '100%',
  },
  gridListTile: {
    background: 'rgba(0,0,0,.5)'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  titleBar: {
    background: 'rgba(0,0,0,0)'
  }
}));


export default function ListDocuments() {
  const classes = useStyles();

  return (
    <div style={{width: '100%', margin: 'auto'}}>
      <img
        className="d-block w-100 investigation--banner"
        src={documentos}
        alt="banner gestion academica"
      />
      <br></br>
    <div className={classes.root}>
      <GridList  className={classes.gridList} cols={3}>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              title="Estatuto UNIQ"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}}  href="http://test1.uniq.edu.pe/public/transparencia/datosgenerales/estatuto.pdf" target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              title="Reglamento de estudiantes"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_estudiantes.pdf" target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              title="Reglamento de gestion académica"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_gestion_academico.pdf" target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de admisión"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_admision.pdf" target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
      <GridListTile>
      <img 
            src={fondo}
            alt="status"
      />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de bienestar universitario"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_bienestar_universitario.pdf" target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de deporte y recreación"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglmento_de_deporte_recreacion.pdf" target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{fontSize:'3em'}}
              title="Politicas planes adecuación"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/politicas_planes_adecuacion.pdf"  target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de investigación"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_investigacion.pdf"  target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Codigo de etica de investigación"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/codigo_de_etica_de_investigacion.pdf"  target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de selección docente"
              titlePosition="top"
        />
         <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_selección_evaluacion_docente.pdf"  target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Plan de capacitación docente"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/plan_capacitacion_docente.pdf"  target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
        <GridListTile>
        <img 
            src={fondo}
            alt="status"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de propiedad intelectual"
              titlePosition="top"
        />
        <GridListTileBar
              actionIcon={
                  <Button variant="outlined" style={{color: 'white', background: 'gray'}} href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_propiedad_intelectual.pdf"  target="_blank">
                    Ver más
                  </Button>
              }
              actionPosition="center"
              className={classes.titleBar}
        />
        </GridListTile>
      </GridList>
    </div>
    <br></br>
    </div>
  );
}