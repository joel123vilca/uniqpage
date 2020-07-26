
import React, { Component } from 'react';
import './App.css';
import {Layout, Header ,Navigation,Drawer,Content, Menu, MenuItem, HeaderRow} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import logo from './image/nav.png';
import trasparencia from './image/pte_logo2.jpg';
import imagen from './image/logo.jpeg';

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <center>
          
      <nav className="container-menu">
        <ul>
          <img src={imagen}  alt="logo"  className="logo-menu"/>
          <p className="menu--title">Universidad Nacional</p>
          <p className="menu--title--two">Intercultural de Quillabamba</p>
          <p className="menu--subtitle-one"><a className="link-one" href="#">POSTULANTES</a></p>
          <p className="menu--subtitle-two"><a className="link-one" href="#">ESTUDIANTES</a></p>
          <p className="menu--subtitle-tree"><a className="link-one" href="#">DOCENTES</a></p>
          <p className="menu--subtitle-four"><a className="link-one" href="#">GESTIÓN</a></p>
          <p className="menu--subtitle-five"><a className="link-one"  href="#">COVID-19</a></p>
          <a href="/Transparencia"><img src="https://www.perupetro.com.pe/wps/wcm/connect/corporativo/d4b79498-17ec-42ac-b109-8f6adf4dba60/Transparencia.png?MOD=AJPERES"  className="portal-transparencia" alt="transparencia"  style={{width: '150px', height: '50px'}}/></a>
        </ul>
      </nav>
      <nav className="menu--principal">
        <ul>
          <li className="menu-link-first"><a className="menu-link" href="/">Nosotros</a></li>
          <li><a className="menu-link" href="http://admision.uniq.edu.pe">Admisión</a></li>
          <li><a className="menu-link" href="#">Pregrado</a></li>
          <li><a className="menu-link" href="http://investigacion.uniq.edu.pe/">Investigación</a></li>
          <li><a className="menu-link" href="http://181.224.238.133">Académico</a></li>
          <li><a className="menu-link" href="#">Administración</a></li>
        </ul>
      </nav>
      </center>
        {/* <Header waterfall hideTop>
            <HeaderRow  className="pri-nav justify-content-center" style={{height: '45px'}}>
              <Navigation>
              <a style={{fontSize: 10, padding: '0 10px' }} href="http://181.224.238.133">SISTEMA ACADEMICO</a>
              <a style={{fontSize: 10, padding: '0 10px'}} href="http://bienestar.uniq.edu.pe/bienestar">BIENESTAR UNIQ</a>
              <a style={{fontSize: 10, padding: '0 10px'}} href="/resoluciones">RESOLUCIONES</a>
              <a style={{fontSize: 10,padding: '0 10px'}} href="http://biblioteca.uniq.edu.pe/">BIBLIOTECA</a>
              <a style={{fontSize: 10, padding: '0 10px'}} href="/convocatorias">CONVOCATORIAS</a>
              <a style={{fontSize: 10, padding: '0 10px'}} href="/abastecimientos">ABASTECIMIENTOS</a>
              <a style={{fontSize: 10, padding: '0 10px'}} href="http://aula.uniq.edu.pe/moodle">AULA</a>
              <a style={{fontSize: 10, padding: '0 10px'}} href="http://repositorio.uniq.edu.pe/">REPOSITORIO INSTITUCIONAL</a>
              <a style={{fontSize: 10, padding: '0 10px'}} href="/disposiciones-cuarentena">DISPOSICIONES CUARENTENA</a>
              <a href="/Transparencia"><img src={trasparencia}  alt="transparencia"  style={{width: '150px', height: '45px'}}/></a>
              </Navigation>
            </HeaderRow>
            <HeaderRow className="header-color justify-content-center">
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
                      Ingeniería Civil
                      </MenuItem>
                  </Link>
                  <Link to="/alimentarias" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                      Ingeniería de Alimentos
                      </MenuItem>
                  </Link>
                  </Menu>
                </Link>
                  <a href="http://investigacion.uniq.edu.pe/"  className="font-weight-bold"> Investigación</a>
                <Link to="/Servicios" className="font-weight-bold" style={{ textDecoration: 'none' }}>Servicios</Link>
                <a className="font-weight-bold" style={{ textDecoration: 'none' }} id="admision" >Admisión
                <Menu target="admision">
                <Link to="/cepre" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Cepre
                      </MenuItem>
                  </Link>
                  <a href="http://admision.uniq.edu.pe" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Admisión
                      </MenuItem>
                  </a>
                  </Menu>
                  </a>
              </Navigation>
            </HeaderRow>
        </Header>
         */}
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
        <Content>
              <div className="page-content">
                <img src={logo}  alt="logo"  className="logo"/>
              </div>
              <center>
              <div className="container-uniq">
                <Main/>
              </div>
              </center>
              <br></br>
              <br></br>
              <br></br>
              <Contact></Contact>
        </Content>
    </Layout>
      </div>
    );
  }
}

export default App;
