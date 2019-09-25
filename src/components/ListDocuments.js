import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import documentos from '../image/documentos-v2.jpg';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
    height: 250,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
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
      <GridList  className={classes.gridList} cols={4}>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/estatuto.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Estatuto"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/datosgenerales/estatuto.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_estudiantes.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de estudiantes"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_estudiantes.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_gestion_academico.png"
            alt="status"
            width="100"
            height="250"
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de gestion academica"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_gestion_academico.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_admision.png"
            alt="status"
            width="100"
            height="250"  
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de admisión"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_admision.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
      </GridList>
      <GridList  className={classes.gridList} cols={4}>
      <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_bienestar_universitario.png"
            alt="status"
            width="100"
            height="250"  
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de bienestar universitario"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_bienestar_universitario.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglmento_de_deporte_recreacion.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de deporte y recreación"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglmento_de_deporte_recreacion.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/politicas_planes_adecuacion.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Politicas planes adecuación"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/politicas_planes_adecuacion.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_investigacion.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de investigación"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_investigacion.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
      </GridList>
      <GridList  className={classes.gridList} cols={4}>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/codigo_de_etica_de_investigacion.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Codigo de etica de investigación"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/codigo_de_etica_de_investigacion.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_seleccion_evaluacion_docente.png"
            alt="status"
            width="100"
            height="250"  
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de selección docente"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_selección_evaluacion_docente.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/plan_capacitacion_docente.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Plan de capacitación docente"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/plan_capacitacion_docente.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
        <GridListTile>
        <img 
            src="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_propiedad_intelectual.png"
            alt="status"
            width="100"
            height="250" 
        />
        <GridListTileBar
              style={{width:'100'}}
              title="Reglamento de propiedad intelectual"
              actionIcon={
                <IconButton aria-label={`info about`}  href="http://test1.uniq.edu.pe/public/transparencia/documentosgestionacademica/reglamento_de_propiedad_intelectual.pdf"  target="_blank" className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
        />
        </GridListTile>
      </GridList>
    </div>
    </div>
  );
}