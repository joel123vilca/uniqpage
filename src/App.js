
import React, { Component } from 'react';
import './App.css';
import {Layout, Header ,Navigation,Drawer,Content} from 'react-mdl';
import  Slider  from './Slider';
import Main from './main';
import {Link} from 'react-router-dom';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header-color" title="UNIVERSIDAD" scroll>
              <Navigation>
                <Link to="/Inicio">Inicio</Link>
                <Link to="/Nosotros">Nosotros</Link>
                <Link to="/Interculturalidad">Interculturalidad</Link>
                <Link to="/Escuelas">Escuelas</Link>
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
                <Link to="/Escuelas">Escuelas</Link>
                <Link to="/Investigación">Investigación</Link>
                <Link to="/Servicios">Servicios</Link>
                <Link to="/Adminsión">Admisión</Link>
                <Link to="/Boletin">Boletin</Link>
              </Navigation>
          </Drawer>
          <Content>
              <Main />
          </Content>
      </Layout>
      </div>
    );
  }
}

export default App;
