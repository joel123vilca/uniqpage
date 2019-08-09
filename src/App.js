
import React, { Component } from 'react';
import './App.css';
import {Layout, Header ,Navigation,Drawer,Content, Menu, MenuItem} from 'react-mdl';
import Nav from 'react-bootstrap/Nav'
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import logo from './image/nav.png'; 
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Nav as="ul" className="pri-nav justify-content-end" >
          <Nav.Item as="li">
            <Nav.Link  style={{ color:'white'}} href="/intranet">Intranet</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  style={{ color:'white'}} href="/resoluciones">Resoluciones</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  style={{ color:'white'}} href="/biblioteca">Biblioteca</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  style={{ color:'white'}} href="/trabajo">Bolsa de Trabajo</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  style={{ color:'white'}} href="/galeria">Galeria de fotos</Nav.Link>
          </Nav.Item>
        </Nav>
          <Header className="header-color"   scroll>
          <img src={logo}  alt="logo"  className="logo"/>
              <Navigation>
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
                  <Link to="/autoridades" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Nuestras Autoridades
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
                  <Link to="/mision" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Reglamento del Docente
                      </MenuItem>
                  </Link>
                  <Link to="/docentes" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Reglamento de propiedad Intelectual
                      </MenuItem>
                  </Link>
                  <Link to="/alianzas" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Codigo de Etica
                      </MenuItem>
                  </Link>
                  <Link to="/alianzas" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Docentes Investigadores
                      </MenuItem>
                  </Link>
                  <Link to="/alianzas" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Repositorio Institucional
                      </MenuItem>
                  </Link>
                  </Menu>
                </Link>
                <Link to="/Servicios" className="font-weight-bold" style={{ textDecoration: 'none' }}>Servicios</Link>
                <a  className="font-weight-bold" style={{ textDecoration: 'none' }} href="http://admision.uniq.edu.pe">Admisión</a>
              </Navigation>
          </Header>
          <Drawer title="U N I Q" className="drawer">
              <Navigation>
              <Link  className="font-weight-bold" id="demo-menu-lower-left" >
                  Nosotros
                  <Menu target="demo-menu-lower-left">
                    <MenuItem as={Link} to='/home'>Universidad</MenuItem>
                    <MenuItem>mision y vision</MenuItem>
                    <MenuItem as={Link} to="/autoridades">Nuestras Autoridades</MenuItem>
                    <MenuItem>Docentes</MenuItem>
                    <MenuItem>Alianzas</MenuItem>
                  </Menu>
                </Link>
                <Link to="/Interculturalidad">Interculturalidad</Link>
                <Link to="/Carreras">Escuelas</Link>
                <Link to="/Investigación">Investigación</Link>
                <Link to="/Servicios">Servicios</Link>
                <Link to="/Adminsión">Admisión</Link>
              </Navigation>
          </Drawer>
          <Content>
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
