import React, { Component } from 'react';
import "./careers.css";
import { Tab, Tabs,Grid,Cell} from 'react-mdl';
import bannerEcoturismo from '../image/escuela-ecoturismo.jpg';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import FolderIcon from '@material-ui/icons/Folder';
import './ecoturismo.css';

const Silabos=[
  {
    title:'Sílabo de Ecología y Medioambiente',
    file_path:'http://test1.uniq.edu.pe/public/silabos/Sílabo%20de%20Ecología%20y%20Medioambiente%20-%20Escuela%20Profesional%20de%20Ecoturismo.PDF'
  },
  {
    title:'Sílabo de Etnología',
    file_path:'http://test1.uniq.edu.pe/public/silabos/Sílabo%20de%20Etnología-Escuela%20Profesional%20de%20Ecoturismo.PDF'
  },
  {
    title:'Sílabo de Matemática I-A',
    file_path:'http://test1.uniq.edu.pe/public/silabos/Sílabo%20de%20Matemática%20I-A-Escuela%20Profesional%20de%20Ecoturismo.PDF'
  },
  {
    title:'Sílabo de Matemática I-B',
    file_path:'http://test1.uniq.edu.pe/public/silabos/Sílabo%20de%20Matemática%20I-B-Escuela%20Profesional%20de%20Ecoturismo.PDF'
  },
  {
    title:'Sílabo de Quechua',
    file_path:'http://test1.uniq.edu.pe/public/silabos/Sílabo%20de%20Quechua-Escuela%20Profesional%20de%20Ecoturismo.PDF'
  }
]

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
                    Esta misión orienta a la formación integral y toma en cuenta los tres quehaceres esenciales de la universidad: docencia, investigación y proyección social.
                    En este proceso, la UNIQ, durante el proceso de formación profesional: (i) combina el conocimiento ancestral, científico y humanista con el práctico; (ii) prioriza los intereses y necesidades de las personas, brindándoles la oportunidad de compartir diferentes perspectivas de conocimiento y experiencias personales; (iii) estimula la participación de los estudiantes en la vida de la comunidad universitaria intercultural, para que contribuyan a mejorarla y, (iv) se preocupa por los problemas de las comunidades de la Provincia de La Convención y aledaños, analizando y debatiendo propuestas de políticas y estrategias de desarrollo social y científico, buscando soluciones a los retos que nuestra diversidad geográfica, cultural y económica nos plantea. 
                </p>
              </center>
            </div>
        )
    } else if(this.state.activeTab === 1){
        return(
            <div  style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
                <center><h2 className="career-title">Perfil Profesional del Licenciado en Ecoturismo</h2></center>
                <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="demo-grid-1">
                    <Cell col={6} style={{textAlign:"justify"}}>
                        <p style={{lineHeight: '20px',marginBottom:'8%'}}>A través de actividades y estrategias metodológicas, conducidas por docentes con solvencia académica y ética, el graduado egresado de la Carrera Profesional de Ecoturismo de la Universidad Nacional Intercultural de Quillabamba cuenta con las siguientes competencias: </p>
<ul>
    <li>
        Conoce diferentes ciencias y disciplinas como la antropología, arqueología, historia, sociología, filosofía, etnología, etnobotánica y con ellas identifica y comprende de manera genérica los aspectos socio cultural de la realidad nacional y los derechos humanos.
    </li>
    <li>
        Conoce el patrimonio cultural y natural de la región y el país.
    </li>
    <li>
    Conoce, valora y se compromete con las culturas andinas y amazónicas de la región y apoya la proyección social y la difusión de sus derechos colectivos y sus aportes para el desarrollo sostenible.
    </li>

    <li>
    Fomenta el conocimiento teórico y práctico, referido a la diversidad cultural tales como, procesos comunicativos interculturales, distintas prácticas culturales, valores, costumbres, tradiciones, paradigmas de la multicultural e intercultural.
    </li>
    <li>
    Desarrolla habilidades para la comunicación y el enriquecimiento intercultural.
    </li>

<li>
Conoce el quechua y las lenguas originarias amazónicas.
</li>
    </ul>

</Cell>

<Cell col={6} spacing={6}>             
       <ul>
       <li>Utiliza el lenguaje técnico en inglés para comunicarse en sus diversas actividades enfocadas al ecoturismo</li>
       <li>Conoce y difunde el folklore nacional y regional y su gastronomía.</li>
       <li>Posee conocimientos básicos sobre geografía, biología, ecología y ambiente, los analiza y los aplica.</li>
       <li>Fomenta y difunde la conservación de las áreas y recursos naturales y culturales en las que se desarrolla el ecoturismo.</li>
       <li>Gestiona la actividad ecoturística en el marco del desarrollo sostenible.</li>
       <li>Conoce las técnicas y manejo de grupos.</li>
       <li>Desarrolla productos y servicios ecoturísticos de calidad.</li>
       <li>Brinda y opera programas de servicios ecoturísticos utilizando las nuevas tecnologías.</li>
           <li>Interacciona con los diversos agentes de la industria turística.</li>

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
            <p>Bachiller en Ecoturismo.</p>
            <h2 className="career-title">Título Profesional</h2>
            <p>Licenciado en Ecoturismo.</p>
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
                <embed src="http://admisionapi.uniq.edu.pe/public/documentos/eprofesionales/malla_ecoturismo.pdf" width="80%" height="375" />
              </center>
            </div>
        )
    } 
    else if(this.state.activeTab === 4){
      return(
          <div>
            <center>
              <h2 className="career-title">I Semestre</h2>
            </center>
            <List className="contenedor-silabo">
                {
                  Silabos.map((document,i)=>{
                    return(
                      <ListItem key={i}>
                        <ListItemAvatar>
                          <Avatar>
                            <FolderIcon />
                         </Avatar>
                        </ListItemAvatar>
                        {/* <p></p> */}
                        <ListItemText
                          primary={document.title}
                          style={{width:'50%'}}
                          
                        />
                        {/* <ListItemSecondaryAction> */}
                          <IconButton edge="end" target="_blank" href={document.file_path}>
                            <Icon 
                            // color="secondary" 
                            style={{color:'white'}}>cloud_download</Icon>
                          </IconButton>
                        {/* </ListItemSecondaryAction> */}
                      </ListItem>
                    )
                  }) 
                }
              </List>
            {/* <center> */}
              {/* <embed src="http://admisionapi.uniq.edu.pe/public/documentos/eprofesionales/malla_ecoturismo.pdf" width="80%" height="375" /> */}
            {/* </center> */}
          </div>
      )
  } 
}
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
          <img
            className="d-block w-100 slider"
            src={bannerEcoturismo}
            alt="banner carrera"
          />
          <br></br>
        <div className="demo-tabs">
          <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>Mision</Tab>
              <Tab>Perfil Profesional</Tab>
              <Tab>Grado - Titulo - Modalidad</Tab>
              <Tab>Malla Curricular</Tab>
              <Tab>Sílabos</Tab>
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