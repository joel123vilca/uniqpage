import React, { Component } from 'react';
import "./careers.css";
import { Tab, Tabs,Grid,Cell} from 'react-mdl';
import bannerAgronomica from '../image/escuela-agronomica.jpg'; 
import malla_ing_agronimica from '../image/malla_ing_agronomica.png';


class Careers extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
  }
  toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
              <center>
              <h2 className="career-title">Misión</h2>
                <p style={{textAlign:"justify"}}>
                Brindar formación profesional universitaria de calidad al estudiante universitario, en base a la generación de conocimiento humanístico, científico, tecnológico y con enfoque intercultural, que contribuya al desarrollo sostenible de la sociedad”.
                Esta misión orienta a la formación integral y toma en cuenta los tres quehaceres esenciales de la universidad: docencia, investigación y responsabilidad social.
                La UNIQ, durante el proceso de formación: (i) combina el conocimiento ancestral, científico y humanista con el práctico; (ii) prioriza los intereses y necesidades de las personas, brindándoles la oportunidad de compartir diferentes perspectivas de conocimiento y experiencias personales; (iii) estimula la participación de los estudiantes en la vida de la comunidad universitaria intercultural, para que contribuyan a mejorarla y, (iv) se preocupa por los problemas de las comunidades de la Provincia de La Convención y aledaños, analizando y debatiendo propuestas de políticas y estrategias de desarrollo social y científico, buscando soluciones a los retos que nuestra diversidad geográfica, cultural y económica nos plantea.
                </p>
              </center>
            </div>
        )
    } else if(this.state.activeTab === 1){
        return(
            <div  style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
                <center><h2 className="career-title">Perfil Profesional del Ingeniero Agrónomo Tropical</h2></center>
                <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={6} style={{textAlign:"justify"}}>
                        <p style={{lineHeight: '20px',marginBottom:'8%'}}>El graduado de la Universidad Nacional Intercultural de Quillabamba, independientemente de sus competencias específicas, adquieren las siguientes competencias generales:</p>
<ul>
    <li>
    Gestiona su proceso de aprendizaje de manera autónoma y permanente.
    </li>
    <li>
    Actúa con responsabilidad ética y ciudadana, reconociendo y respetando la diversidad cultural, la autonomía y la dignidad de los demás.
    </li>
    <li>
    Comunica eficazmente ideas con claridad, coherencia y consistencia, usando un lenguaje formal, oral o escrito.
    </li>

    <li>
    Utiliza el razonamiento lógico-matemático para interpretar información o solucionar problemas académicos y de la vida cotidiana.
    </li>
    <li>
    Investiga de manera crítica, reflexiva y creativa y presenta formalmente sus resultados.
    </li>

<li>
Trabaja colaborativamente en equipos disciplinarios y multidisciplinarios.
</li>
    </ul>

</Cell>

<Cell col={6} spacing={6}>             
       <ul>
       <li>Contribuye en el diseño e implementación de proyectos que aporten responsablemente al desarrollo social, ambiental, cultural o científico.</li>
       <li>Conoce, valora y se compromete con las culturas andinas y amazónicas de la región y apoya la proyección social y la difusión de sus derechos colectivos y sus aportes para el desarrollo sostenible.</li>
       <li>Conoce el quechua y las lenguas originarias amazónicas</li>
       <li>Promueve el cambio de actitud del hombre de campo, demostrándoles la formación ética y moral.</li>
       
       <li>Posee conocimientos básicos sobre biología, ecología y ambiente, los analiza y los aplica.</li>
       <li>Define el concepto, importancia, división de la química y propiedades físicas, químicas de la materia y tipos de energía.</li>
       <li>Fomenta y difunde la conservación de las áreas y recursos naturales y culturales en las que se desarrolla.</li>
       <li>Gestiona la actividad agrícola en el marco del desarrollo sostenible.</li>
        <li>Trabaja productos agrícolas de acuerdo a las necesidades del mercado regional nacional e internacional.</li>

       </ul>
    </Cell>
                </Grid>

            </div>


              <center>
              
                <p>


        
                </p>
              </center>
            </div>
        )
    } else if(this.state.activeTab === 2){
        return(
            <div style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
        <Grid className="demo-grid-1">
        <Cell  col={6} spacing={6}>
            <h2 className="career-title" >Grado Académico</h2>
            <p>Bachiller en Ingeniería Agronómica Tropical.</p>
            <h2 className="career-title">Título Profesional</h2>
            <p>Ingeniero Agrónomo Tropical.</p>
            <h2 className="career-title" >Semestres Académicos</h2>
            <p>10 Semestres</p>
        </Cell> 
        <Cell  col={6} spacing={6}>
            <h2 className="career-title">Número de Créditos</h2>
            <p>206 créditos.</p>
            <h2 className="career-title">Modalidad</h2>
            <p>Presencial.</p>
        </Cell> 
        </Grid>

            </div>
        )
    } else if(this.state.activeTab === 3){
        return(
            <div>
              <center>
                <h2 className="career-title">Malla Curricular</h2>
              </center>
              <center>
              <embed src="http://admisionapi.uniq.edu.pe/public/documentos/eprofesionales/malla_ing_agronomica.pdf" width="80%" height="375" />
              </center>
            </div>
        )
    } 
}
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
          <img
            className="d-block w-100 slider"
            src={bannerAgronomica}
            alt="banner carrera"
          />
          <br></br>
        <div className="demo-tabs">
          <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>Mision</Tab>
              <Tab>Perfil Profesional</Tab>
              <Tab>Grado - Titulo - Modalidad</Tab>
              <Tab>Malla Curricular</Tab>
          </Tabs>
          <section>
                <div className="career-content">{this.toggleCategories()}</div>
          </section>
        </div>
      </div>
    )
  }
}

export default Careers;