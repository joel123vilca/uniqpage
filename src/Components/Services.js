import React, { Component } from 'react';
import servicios from '../image/servicios.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './services.css'

class Services extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 services--banner"
          src={servicios}
          alt="banner documentos"
        />
        <Grid container spacing={2} className="services--content">
          <Grid  xs={12} sm={4}>
            <h5 className="services--title">LAS DISCIPLINAS DEPORTIVAS</h5>
            <p className="services--description"> 
            En las actividades deportivas podrán participar todos los integrantes 
            de la comunidad universitaria (estudiantes, docentes, personal administrativo), 
            quienes deberán, ya sea en torneos organizados o no, mantener una conducta respetuosa.
            El participante que presente conductas antideportivas graves como agresión física o verbal 
            a un compañero, adversario, espectador, jueces o miembro de la comunidad universitaria, quedará 
            excluido de la actividad, para ser 
            evaluado y sancionado por la Oficina de bienestar Universitario de acuerdo a la gravedad de la conducta.
            <br></br>
            La Universidad podrá organizar torneos específicos, a través de la Oficina de Bienestar Universitario en
             coordinación con la Unidad de servicios culturales, deportivos y artísticos, para las diferentes disciplinas deportivas, los cuales se realizarán de acuerdo a las bases aprobadas por la Comisión Organizadora para tal fin.
            </p>
            <center>
            <Button variant="contained" style={{color:'green'}}>
              Descargar
              <Icon style={{color: 'white'}}>cloud_download</Icon>
            </Button>
            </center>
            <br></br>
          </Grid>
          <Grid  xs={12} sm={4}>
            <h5 className="services--title">USO DE LAS INSTALACIONES DEPORTIVAS</h5>
            <p className="services--description">
            Las instalaciones Deportivas, son para uso exclusivo de los miembros de la Comunidad Universitaria (alumnos, docentes, graduados y personal administrativo) de la Universidad Nacional Intercultural  de Quillabamba
            <br></br>
            La práctica deportiva se realizará en el horario de 07:00 am a 10:00 pm. 
            <br></br>
            Para hacer uso de las Instalaciones Deportivas de la Universidad, estas deberán ser reservadas con anticipación al responsable de la Unidad de Servicios Culturales, Deportivos y Artísticos, quién separa las instalaciones conforme al orden de llegada de las solicitudes. La reserva de las Instalaciones Deportivas por parte de alguna dependencia, unidad académica o administrativa de la Universidad tiene prioridad sobre cualquier solicitud ingresada.
            <br></br>
            Al ingresar al Instalaciones Deportivas, acreditar la condición de alumno, docente, graduado o administrativo.
            </p>
            <br></br>
          </Grid>
          <Grid  xs={12} sm={4}>
            <p className="services--description">
            Las personas que ingresen deberán comportarse correctamente y cuidar su integridad física.  La   UNIQ    no   será responsable por los accidentes que se pudieran producir o presentar dentro de las instalaciones deportivas.
            <br></br>
            Las personas serán responsables de los daños que pudieran ocasionar dentro de las instalaciones Deportivas.
            <br></br>
            Las personas que ingresen deberán usar correctamente y en forma debida los diferentes ambientes deportivos.
            <br></br>
            Las personas que ingresen deberán cuidar sus bienes y artículos personales.  La Universidad no se responsabiliza por la pérdida de los mismos.
            <br></br>
            No está permitido el ingreso de personas con síntomas o en estado de embriaguez o bajo la influencia de drogas o sustancias estupefacientes.
            <br></br>
            Se encuentra terminantemente prohibido fumar en cualquier ambiente de las Instalaciones Deportivas.
            Se encuentra prohibido el ingreso con mascotas al Instalaciones Deportivas.
            </p>
            <center>
            <Button variant="contained" style={{color:'green'}}>
              Descargar
              <Icon style={{color: 'white'}}>cloud_download</Icon>
            </Button>
            </center>
            <br></br>
          </Grid>
          <Grid xs={12} sm={3}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotz98bVfrZcaVrLKIrgXubPz8Olr6lhmmnty7iFhods1fGPfl" alt="complejo deportivo" />
          </Grid>
          <Grid xs={12} sm={3}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotz98bVfrZcaVrLKIrgXubPz8Olr6lhmmnty7iFhods1fGPfl" alt="complejo deportivo" />
          </Grid>
          <Grid xs={12} sm={3}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotz98bVfrZcaVrLKIrgXubPz8Olr6lhmmnty7iFhods1fGPfl" alt="complejo deportivo" />
          </Grid>
          <Grid xs={12} sm={3}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotz98bVfrZcaVrLKIrgXubPz8Olr6lhmmnty7iFhods1fGPfl" alt="complejo deportivo" />
          </Grid>
        </Grid>
        <br></br>
    </div>
    )
  }
}

export default Services;