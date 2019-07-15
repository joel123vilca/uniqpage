
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
                    <MenuItem>Universidad</MenuItem>
                    <MenuItem>mision</MenuItem>
                    <MenuItem>Docentes</MenuItem>
                    <MenuItem>Alianzas</MenuItem>
                  </Menu>
                </Link>
                <Link to="/Interculturalidad" className="font-weight-bold" >Interculturalidad</Link>
                <Link to="/Carreras" className="font-weight-bold" >Escuelas</Link>
                <Link to="/Investigación" className="font-weight-bold" >Investigación</Link>
                <Link to="/Servicios" className="font-weight-bold" >Servicios</Link>
                <Link to="/Adminsión" className="font-weight-bold">Admisión</Link>
                <Link to="/Boletin" className="font-weight-bold">Boletin</Link>
              </Navigation>
          </Header>
          <Drawer title="U N I Q" className="drawer">
              <Navigation>
              <Link to=""  className="font-weight-bold" id="demo-menu-lower-left" >
                  Nosotros
                  <Menu target="demo-menu-lower-left">
                    <MenuItem>Universidad</MenuItem>
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
                <Link to="/Boletin">Boletin</Link>
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
