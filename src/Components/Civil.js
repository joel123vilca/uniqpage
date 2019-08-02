import React, { Component } from 'react';
import "./careers.css";
import { Tab, Tabs,Grid,Cell} from 'react-mdl';
import bannerCivil from '../image/escuela-civil.jpg'; 
import malla_ing_agronimica from '../image/malla_ing_agronomica.png';


class Careers extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 2 };
  }
  toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
              <center>
              <h2 className="career-title">Misión</h2>
                <p style={{textAlign:"justify"}}>
                    Brindar formación profesional universitaria de calidad al estudiante universitario, en base a la generación de conocimiento humanístico, científico, tecnológico y con enfoque intercultural, que contribuya al desarrollo sostenible de la sociedad".
                    Esta misión orienta a la formación integral y toma en cuenta los tres quehaceres esenciales de la universidad: docencia, investigación y responsabilidad social.
                    En este proceso, la UNIQ, durante el proceso de formación: (i) combina el conocimiento ancestral, científico y humanista con el práctico; (ii) prioriza los intereses y necesidades de las personas, brindándoles la oportunidad de compartir diferentes perspectivas de conocimiento y experiencias personales; (iii) estimula la participación de los estudiantes en la vida de la comunidad universitaria intercultural, para que contribuyan a mejorarla y, (iv) se preocupa por los problemas de las comunidades de la Provincia de La Convención y aledaños, analizando y debatiendo propuestas de políticas y estrategias de desarrollo social y científico, buscando soluciones a los retos que nuestra diversidad geográfica, cultural y económica nos plantea. 
                </p>
              </center>
            </div>
        )
    } else if(this.state.activeTab === 1){
        return(
            <div  style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
                <center><h2 className="career-title">Perfil Profesional del Ingeniero Civil</h2></center>
                <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={6} style={{textAlign:"justify"}}>
                        <p style={{lineHeight: '20px',marginBottom:'8%'}}>Según el proyecto Alfa Tuning para América Latina busca "afinar" las estructuras educativas de América Latina iniciando un debate cuya meta es identificar e intercambiar información y mejorar la colaboración entre las instituciones de educación superior para el desarrollo de la calidad, efectividad y transparencia. Es un proyecto independiente, impulsado y coordinado por Universidades de distintos países, tanto latinoamericanos como europeos.
Para el caso de la formación del estudiante de ingeniería civil los egresados deben lograr las siguientes competencias generales:</p>

<ul>
    <li>Aplica conocimientos de las ciencias básicas y ciencias de la ingeniería civil.</li>
    <li>Identifica, evalúa e implementa las tecnologías más apropiadas para su contexto.</li>
    <li> Crea, innova y emprende para contribuye al desarrollo tecnológico.</li>
    <li> Concibe, analiza, proyecta y diseña obras de ingeniería civil.</li>
    <li> Planifica y programa obras y servicios de ingeniería civil.</li>
    <li> Construye, supervisa, inspecciona y evalúa obras de ingeniería civil.</li>
    <li> Opera, mantiene y rehabilita obras de ingeniería civil.</li>
    <li> Evaluar el impacto ambiental y social de las obras civiles.</li>
    <li> Modela y simula sistemas y procesos de ingeniería civil</li>

</ul>  
       
</Cell>

<Cell col={6} spacing={6}>             
<ul>
       
<li>Dirige y lidera recursos humanos.</li>
        <li> Administra los recursos materiales y equipos.</li> 
        <li> Comprende y asocia los conceptos legales, económicos y financieros para la toma de decisiones, gestión de proyectos y obras de ingeniería civil.</li> 
        <li> Abstrae espacial y representa gráficamente.</li> 
        <li> Propone soluciones que contribuyan al desarrollo sostenible.</li> 
        <li> Previene y evalúa los riesgos en las obras de ingeniería civil.</li>
        <li> Maneja e interpreta información de campo.</li>
        <li> Utiliza tecnologías de la información, software y herramientas para la ingeniería civil.</li>
        <li> Interactúa con grupos multidisciplinarios y dar soluciones integrales de ingeniería civil.</li>
        <li> Emplea técnicas de control de calidad en los materiales y servicios de ingeniería civil.</li>
        <li> Posee habilidades para buscar, procesar y analizar información procedente de fuentes diversas usando las TICs y otros medios.</li>
        <li> Se interrelaciona adecuadamente.</li>
        <li> Dominio de lenguas extranjeras, al menos el idioma inglés o lengua nativa.</li>
        <li> Utiliza el pensamiento crítico para identificar, plantear y resolver problemas.</li>
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
    <p>Bachiller en Ingeniería Civil</p>
    <h2 className="career-title">Título Profesional</h2>
    <p>Ingeniero Civil.</p>
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
            src={bannerCivil}
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