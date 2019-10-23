
import React, { Component } from 'react';
import './App.css';
import {Layout, Header ,Navigation,Drawer,Content, Menu, MenuItem, HeaderRow} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import logo from './image/nav.png';
import trasparencia from './image/pte_logo2.jpg';
import Chat from './Chat';
import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <Header waterfall hideTop>
            <HeaderRow  className="pri-nav justify-content-end" style={{height: 45}}>
              <Navigation>
              <a style={{fontSize: 12}} href="http://181.224.238.133">SISTEMA ACADEMICO</a>
              <a style={{fontSize: 12}} href="http://admision.uniq.edu.pe/cepre">PREINSCRIPCIÓN CEPRE</a>
              <a style={{fontSize: 12}} href="http://bienestar.uniq.edu.pe/bienestar">BIENESTAR UNIQ</a>
              <a style={{fontSize: 12}} href="/resoluciones">RESOLUCIONES</a>
              <a style={{fontSize: 12}} href="http://biblioteca.uniq.edu.pe/">BIBLIOTECA</a>
              <a style={{fontSize: 12}} href="/convocatorias">CONVOCATORIAS</a>
              <a style={{fontSize: 12}} href="/abastecimientos">ABASTECIMIENTOS</a>
              <a style={{fontSize: 12}} href="http://repositorio.uniq.edu.pe/">REPOSITORIO INSTITUCIONAL</a>
              <a href="/Transparencia"><img src={trasparencia}  alt="transparencia"  style={{width: '150px', height: '45px'}}/></a>
              </Navigation>
            </HeaderRow>
            <HeaderRow className="header-color">
            <Navigation>
                <img src={logo}  alt="logo"  className="logo"/>
                <Link to="/inicio" className="font-weight-bold" style={{ textDecoration: 'none' }} >Inicio</Link>
                <Link  className="font-weight-bold" id="demo-menu-lower-left"  style={{ textDecoration: 'none' }}>
                  Nosotros
                  <Menu target="demo-menu-lower-left">
                  <Link to="/universidad" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Universidad
                      </MenuItem>
                  </Link>
                  <Link to="/mision" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Misión y Visión
                      </MenuItem>
                  </Link>
                  <Link to="/gestion-academica" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Documentos de Gestion Académica
                      </MenuItem>
                  </Link>
                  <Link to="/autoridades" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Nuestras Autoridades
                      </MenuItem>
                  </Link>
                  <Link to="/directorioelectronico" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Directorio Intitucional
                      </MenuItem>
                  </Link>
                  <Link to="/docentes" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Docentes
                      </MenuItem>
                  </Link>
                  <Link to="/alianzas" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Alianzas
                      </MenuItem>
                  </Link>
                  <Link to="/convocatorias" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Convocatorias
                      </MenuItem>
                  </Link>
                  <Link to="/comunicados" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Comunicados
                      </MenuItem>
                  </Link>
                  </Menu>
                </Link>
                <Link to="/Interculturalidad" className="font-weight-bold" style={{ textDecoration: 'none' }}>Interculturalidad</Link>
                <Link className="font-weight-bold" id="esc" style={{ textDecoration: 'none' }}>Escuelas
                  <Menu target="esc">
                  <Link to="/ecoturismo" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Ecoturismo
                      </MenuItem>
                  </Link>
                  <Link to="/tropical" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                      Ingeniería Agronómica Tropical
                      </MenuItem>
                  </Link>
                  <Link to="/civil" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                      Ingeniería civil
                      </MenuItem>
                  </Link>
                  <Link to="/alimentarias" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                      Ingeniería de Alimentos
                      </MenuItem>
                  </Link>
                  </Menu>
                </Link>
                <Link  className="font-weight-bold" id="inv" >
                  Investigación
                  <Menu target="inv">
                  <Link to="/lineas-investigacion" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Lineas de Investigación
                      </MenuItem>
                  </Link>
                  <Link to="/reglamento">
                      <MenuItem>
                        Reglamento del Docente
                      </MenuItem>
                  </Link>
                  <Link to="/propiedad" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Reglamento de propiedad Intelectual
                      </MenuItem>
                  </Link>
                  <Link to="/codigo-de-etica" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Codigo de Etica
                      </MenuItem>
                  </Link>
                  <Link to="/docentes" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Docentes Investigadores
                      </MenuItem>
                  </Link>
                  </Menu>
                </Link>
                <Link to="/Servicios" className="font-weight-bold" style={{ textDecoration: 'none' }}>Servicios</Link>
                <a  className="font-weight-bold" style={{ textDecoration: 'none' }} href="http://admision.uniq.edu.pe">Admisión</a>
              </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="UNIQ" style={{background:'#376970'}}>
          <Navigation>
            <a style={{fontSize: 14, color:'white'}} href="/inicio">Inicio</a>
            <a style={{fontSize: 14, color:'white'}} href="/universidad">Universidad</a>
            <a style={{fontSize: 14, color:'white'}} href="/mision">Misión y visión</a>
            <a style={{fontSize: 14, color:'white'}} href="/autoridades">Nuestras Autoridades</a>
            <a style={{fontSize: 14, color:'white'}} href="/convocatorias">Convocatorias</a>
            <a style={{fontSize: 14, color:'white'}} href="/ecoturismo">Ecoturismo</a>
            <a style={{fontSize: 14, color:'white'}} href="/tropical">Ingenieria Agronomica Tropical</a>
            <a style={{fontSize: 14, color:'white'}} href="/civil">Ingenieria Civil</a>
            <a style={{fontSize: 14, color:'white'}} href="/alimentarias">Ingenieria de Alimentos</a>
            <a style={{fontSize: 14, color:'white'}} href="/Interculturalidad">Interculturalidad</a>
            <a style={{fontSize: 14, color:'white'}} href="/lineas-investigacion">Lineas de Investigación</a>
            <a style={{fontSize: 14, color:'white'}} href="/docentes">Docentes</a>
            <a style={{fontSize: 14, color:'white'}} href="/Servicios">Servicios</a>

          </Navigation>
        </Drawer>
        <Content className="mdl-layout__content">
              <div className="page-content">
                <img src={logo}  alt="logo"  className="logo"/>
              </div>
              <Main />
              <Chat></Chat>
              <Contact></Contact>
        </Content>
    </Layout>
      </div>
    );
  }
}

export default App;
