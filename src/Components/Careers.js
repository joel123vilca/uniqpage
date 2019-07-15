import React, { Component } from 'react';
import { Tab, Tabs} from 'react-mdl';
import bannerAgronomia from '../image/banner-agronomia.jpg'; 
import malla_ing_agronimica from '../image/malla_ing_agronomica.png';


class Careers extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 2 };
  }
  toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div>
              <center>
              <h2>Misión</h2>
                <p>
                  “Brindar formación profesional universitaria de calidad al estudiante universitario, 
                  en base a la generación de conocimiento humanístico, científico, 
                tecnológico y con enfoque intercultural, que contribuya al desarrollo sostenible de la sociedad”.
                </p>
              </center>
            </div>
        )
    } else if(this.state.activeTab === 1){
        return(
            <div>
              <center>
              <h2>Perfil Profesional del Ingeniero Agrónomo Tropical</h2>
                <p>
                El graduado de la Universidad Nacional Intercultural de Quillabamba, independientemente de sus competencias específicas, adquieren las siguientes competencias generales:
                </p>
              </center>
            </div>
        )
    } else if(this.state.activeTab === 2){
        return(
            <div>
              <h2>Grado Académico</h2>
              <h2>Título Profesional</h2>
              <h2>Semestres Académicos</h2>
              <h2>Número de Créditos</h2>
              <h2>Modalidad</h2>
            </div>
        )
    } else if(this.state.activeTab === 3){
        return(
            <div><h2>Semestres Academico</h2></div>
        )
    } else if(this.state.activeTab === 4){
      return(
          <div>
            <h2>Malla Curricular</h2>
            <img
            className="d-block w-100 slider"
            src={malla_ing_agronimica}
            alt="malla"
          />
          </div>
      )
  }
}
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
          <img
            className="d-block w-100 slider"
            src={bannerAgronomia}
            alt="banner carrera"
          />
          <br></br>
        <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Mision</Tab>
                    <Tab>Perfil Profesional</Tab>
                    <Tab>Grado - Titulo - Modalidad</Tab>
                    <Tab>Semestres Academico</Tab>
                    <Tab>Malla Curricular</Tab>
                </Tabs>
                <section>
                    <div className="content">
                      <div className="content">{this.toggleCategories()}</div>
                    </div>
                </section>
        </div>
      </div>
    )
  }
}

export default Careers;