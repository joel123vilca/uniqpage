
import React, { Component } from 'react';
import './App.css';
import {Layout, Header ,Navigation,Drawer,Content, Menu, MenuItem} from 'react-mdl';
import Nav from 'react-bootstrap/Nav'
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import logo from './image/nav.png'; 

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
                <Link to="/inicio" className="font-weight-bold" >Inicio</Link>
                <Link to="" className="font-weight-bold" id="demo-menu-lower-left" >
                  Nosotros
                  <Menu target="demo-menu-lower-left">
                  <Link to="/universidad" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Universidad
                      </MenuItem>
                  </Link>
                  <Link to="/mision" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Misión
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
                  </Menu>
                </Link>
                <Link to="/Interculturalidad" className="font-weight-bold" >Interculturalidad</Link>
                <Link to="/Carreras" className="font-weight-bold" id="esc">Escuelas
                  <Menu target="esc">
                  <Link to="/universidad" style={{ textDecoration: 'none', display: 'block' }}>
                      <MenuItem>
                        Economia Agraria
                      </MenuItem>
                  </Link>
                  </Menu>
                </Link>
                <Link to="" className="font-weight-bold" id="inv" >
                  Investigación
                  <Menu target="inv">
                  <Link to="/universidad" style={{ textDecoration: 'none', display: 'block' }}>
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
                <Link to="/Servicios" className="font-weight-bold" >Servicios</Link>
                <Link to="/Adminsión" className="font-weight-bold">Admisión</Link>
              </Navigation>
          </Header>
          <Drawer title="U N I Q" className="drawer">
              <Navigation>
              <Link to=""  className="font-weight-bold" id="demo-menu-lower-left" >
                  Nosotros
                  <Menu target="demo-menu-lower-left">
                    <MenuItem as={Link} to='/home'>Universidad</MenuItem>
                    <MenuItem>mision</MenuItem>
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
              <Contact></Contact>
          </Content>
      </Layout>
      </div>
    );
  }
}

export default App;
