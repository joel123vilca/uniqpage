
import React, { Component } from 'react';
import './App.css';
import {Layout, Header ,Navigation,Drawer,Content, Menu, MenuItem} from 'react-mdl';
import Nav from 'react-bootstrap/Nav'
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import logo from './image/logo.jpeg';

class App extends Component {
  render() {
    return (
      <div>
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
        <Layout>
          <Header className="header-color" title="UNIVERSIDAD" scroll>
              <Navigation>
                <Link to="/inicio">Inicio</Link>
                <Link id="demo-menu-lower-left" >
                  Nosotros
                  <Menu target="demo-menu-lower-left">
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>
                    <Link to="/">universidad</Link>
                    </li>
                    <li>
                    <Link to="/alianzas">Alianzas</Link>
                    </li>
                    <li>
                    <Link to="/docentes">Docentes</Link>
                    </li>
                  </ul>
                  </Menu>
                </Link>
                <Link to="/Interculturalidad">Interculturalidad</Link>
                <Link to="/Carreras">Escuelas</Link>
                <Link to="/Investigación">Investigación</Link>
                <Link to="/Servicios">Servicios</Link>
                <Link to="/Adminsión">Admisión</Link>
                <Link to="/Boletin">Boletin</Link>
              </Navigation>
          </Header>
          <Drawer title="UNIQ" className="drawer">
              <Navigation>
                <Link to="/Inicio">Inicio</Link>
                <Link to="/Nosotros">Nosotros</Link>
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
