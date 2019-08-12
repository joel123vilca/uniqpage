import React, { Component } from 'react';
import investigacion from '../image/investigacion.jpg';
import investigacionInicio from '../image/invetigacion-inicio.jpg';
import investigacionFinal from '../image/investigacion-dos.jpg'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import './investigation.css'

class Investigation extends Component {
    render(){
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <img
                className="d-block w-100 investigation--banner"
                src={investigacion}
                alt="banner investigacion"
            />
            <div>
              <Grid container spacing={2} className="investigation--content">
                <Grid item xs={12}>
                  <Paper ></Paper>
                </Grid>
                <Grid  xs={12} sm={8}>
                  <p className="investigation--description">Una línea de investigación se define como un eje ordenador de la actividad de investigación, posee una base razonada que permite la integración y la continuidad de los esfuerzos de uno o más investigadores, equipos o instituciones comprometidas en el desarrollo del conocimiento, con avances teóricos, tecnológicos y de innovación en un ámbito específico, considerado también como niveles de concreción y especificidad que señalan problemas concretos cuya necesidad de ser resueltos es evidente y de alguna manera requerida por un sector del entorno.</p>
                </Grid>
                <Grid container xs={12} sm={4}>
                  <Avatar alt="Remy Sharp" src={investigacionFinal} style={{marginLeft: '30px', width: '300px', height: '300px'}} />
                </Grid>
                <Grid container xs={12} sm={4}>
                  <Avatar alt="Remy Sharp" src={investigacionInicio} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                  <Avatar alt="Remy Sharp" src={investigacionInicio} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                  <Avatar alt="Remy Sharp" src={investigacionInicio} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <h4 className="investigation--title">1. LÍNEAS DE INVESTIGACIÓN INSTITUCIONALES</h4>
                  <p className="investigation--description" >Las líneas de investigación institucionales en la UNIQ son temas que responden a las necesidades de 
                    investigación de la zona andino amazónica de la región Cusco por su pertinencia social e interés académico y que se aborda desde una o varias 
                    áreas del conocimiento por un grupo de investigación.<br></br>
                    Estas líneas son el resultado del estudio de mercado para la elaboración de los documentos de gestión: Proyecto de Desarrollo Institucional (PDI)
                    y Proyecto Institucional Universitario (PIU) y justifican la creación de las cuatro escuelas profesionales y la inversión en investigación en el 
                    proyecto de implementación de la Universidad Nacional Intercultural de Quillabamba; obedecen a las principales actividades económicas de la provincia de la Convención que son la agricultura: siendo los cultivos de café y el cacao los que significan el mayor aporte económico y de subsistencia de la región, el turismo y el sector de la construcción. Estas líneas se desarrollan preferentemente en los Institutos de investigación de la UNIQ.  
                  </p>
                  <h5 className="investigation--title">1.1. INNOVACIÓN Y DESARROLLO TECNOLÓGICO DEL CACAO Y SUS DERIVADOS</h5>
                  <p className="investigation--description" >
                    <ul>
								    <li><strong>Sub línea de variabilidad morfológica y genética según procedencia.</strong></li>
								    <li><strong>Sub línea de enfermedades y plagas del cacao por procedencias.</strong></li>
								    <li><strong>Sub línea de técnicas para la mejora de la producción agrícola por procedencias.</strong></li>
								    <li><strong>Sub línea de la cosecha y post cosecha del cacao.</strong></li>
								    <li><strong>Sub línea de productos, sub productos y derivados del cacao.</strong></li>
								    <li><strong>Sub línea de gestión empresarial y comercialización del cacao.</strong></li>
							      </ul>
                  </p>
                  <h5 className="investigation--title">1.2. INNOVACIÓN Y DESARROLLO TECNOLÓGICO DEL CAFÉ Y SUS DERIVADOS</h5>
                  <p className="investigation--description" >
                  <ul>
								    <li><strong>Sub línea de variabilidad morfológica y genética del café según procedencias.</strong></li>
								    <li><strong>Sub línea de plagas y enfermedades del café por procedencias.</strong></li>
								    <li><strong>Sub línea de manejo agronómico del café según procedencias.</strong></li>
								    <li><strong>Sub línea de cosecha, post cosecha.</strong></li>
								    <li><strong>Sub línea de Industrialización y derivados del café por procedencias.</strong></li>
								    <li><strong>Sub línea de gestión empresarial y comercialización del café.</strong></li>
							    </ul>
                  </p>
                  <h5 className="investigation--title">1.3. INNOVACIÓN Y DESARROLLO DE LA CONSTRUCCIÓN EN SELVA</h5>
                  <p className="investigation--description" >
                    <ul>
								    <li><strong>Sub línea de Ciudades e infraestructuras sostenibles.</strong></li>
								    <li><strong>Sub línea de Gestión, innovación y tecnología en infraestructura moderna y patrimonial.</strong></li>
								    <li><strong>Sub línea de Simulación y modelamiento numérico y experimental en Ingeniería Civil. </strong></li>
								    <li><strong>Sub línea de Gestión, innovación y tecnología en sistemas naturales y antrópicos.</strong></li>
								    <li><strong>Sub línea de Gestión de proyectos y empresas afines (consultoras, constructoras y otras).</strong></li>
							      </ul>
                  </p>
                  <h5 className="investigation--title">1.4. INNOVACIÓN Y DESARROLLO DEL TURISMO EN LA CONVENCIÓN</h5>
                  <p className="investigation--description" >
                    <ul>
                      <li><strong>Sub línea de Planificación Turística Sostenible.</strong></li>
                      <li><strong>Sub línea de Diversificación de la oferta turística sostenible.</strong></li>
                      <li><strong>Sub línea de Potencialización turística existente.</strong></li>
                      <li><strong>Sub línea de Certificación turística sostenible.</strong></li>
                      <li><strong>Sub línea de Gestión empresarial y organización turística sostenible.</strong></li>
                      <li><strong>Sub línea de Impactos socioculturales, ambientales y capacidad de carga del turismo.</strong></li>
                      <li><strong>Sub línea de Turismo comunitario, servicios y sector agropecuario.</strong></li>
                    </ul>
                  </p>
                  <h5 className="investigation--title">1.5. DESARROLLO DE ESPECIES ACUÍCOLAS EN SELVA ALTA</h5>
                  <p className="investigation--description" >
                    <ul>
								    <li><strong>Sub línea de infraestructura pesquera (tradicional y moderna) y monitoreo de la producción piscícola.</strong></li>
								    <li><strong>Sub línea de manejo tecnológico sostenible de la acuicultura amazónica que incluye reproducción de especies, producción de alevines, sanidad, nutrición, fisiología de reproducción, comportamiento y biología e impacto ambiental de la actividad piscícola.</strong></li>
								    <li><strong>Sub línea de calidad de los productos, procesamiento primario, valor agregado, certificaciones, mercados, comercialización, gestión empresarial y comportamiento económico del consumidor.</strong></li>
								    <li><strong>Sub línea de estudios en dinámica poblacional, ordenamiento, desarrollo pesquero sostenible e impacto ambiental de actividades humanas sobre la fauna íctica en la Amazonía de la región Cusco.</strong></li>
								    <li><strong>Sub línea de estudios en requerimientos de la cantidad y calidad de agua para la producción sostenible piscícola.</strong></li>
								    <li><strong>Sub línea de biodiversidad, conservación, recuperación, repoblamiento y prospección de especies acuícolas nativas.</strong></li>
								    <li><strong>Sub línea de estudios en especies hidrobiológicas distintas a la clase Peces.</strong></li>
							      </ul>
                  </p>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <h4 className="investigation--title">2. LÍNEAS DE INVESTIGACIÓN DE LOS PROGRAMAS DE ESTUDIOS DE LAS ESCUELAS PROFESIONALES</h4>
                  <p className="investigation--description" ></p>
                  <h5 className="investigation--title">2.1. LÍNEA DE INVESTIGACIÓN DE LA ESCUELA PROFESIONAL DE INGENIERÍA AGRONÓMICA TROPICAL</h5>
                  <p className="investigation--description" >
                    En agricultura uno de los factores más importantes es el suelo ya que sus características determinan el tipo de cultivo, estas 
                    características son posibles de tratarse y mejorarse para incrementar la producción, la calidad y la conservación del mismo suelo. 
                    De otro lado el clima, el tipo de cultivo y la falta de control incrementan las plagas y enfermedades que reducen la producción. 
                    Es por tanto importante investigar en estos dos aspectos en los valles de La Convención para proponer soluciones en el tratamiento 
                    de suelos y control de plagas a los agricultores de la provincia.
                  </p>
                  <h5 className="investigation--title">2.2. LÍNEA DE INVESTIGACIÓN DE LA ESCUELA PROFESIONAL DE INGENIERÍA DE ALIMENTOS</h5>
                  <p className="investigation--description" >
                    En agricultura uno de los factores más importantes es el suelo ya que sus características determinan el tipo de cultivo, estas 
                    características son posibles de tratarse y mejorarse para incrementar la producción, la calidad y la conservación del mismo suelo. 
                    De otro lado el clima, el tipo de cultivo y la falta de control incrementan las plagas y enfermedades que reducen la producción. 
                    Es por tanto importante investigar en estos dos aspectos en los valles de La Convención para proponer soluciones en el tratamiento 
                    de suelos y control de plagas a los agricultores de la provincia.
                  </p>
                  <h5 className="investigation--title">2.3. LÍNEA DE INVESTIGACIÓN DE LA ESCUELA PROFESIONAL DE ECOTURISMO</h5>
                  <p className="investigation--description" >
                    En agricultura uno de los factores más importantes es el suelo ya que sus características determinan el tipo de cultivo, estas 
                    características son posibles de tratarse y mejorarse para incrementar la producción, la calidad y la conservación del mismo suelo. 
                    De otro lado el clima, el tipo de cultivo y la falta de control incrementan las plagas y enfermedades que reducen la producción. 
                    Es por tanto importante investigar en estos dos aspectos en los valles de La Convención para proponer soluciones en el tratamiento 
                    de suelos y control de plagas a los agricultores de la provincia.
                  </p>
                  <h5 className="investigation--title">2.4. LÍNEA DE INVESTIGACIÓN DE LA ESCUELA PROFESIONAL DE INGENIERÍA CIVIL</h5>
                  <p className="investigation--description" >
                    En agricultura uno de los factores más importantes es el suelo ya que sus características determinan el tipo de cultivo, estas 
                    características son posibles de tratarse y mejorarse para incrementar la producción, la calidad y la conservación del mismo suelo. 
                    De otro lado el clima, el tipo de cultivo y la falta de control incrementan las plagas y enfermedades que reducen la producción. 
                    Es por tanto importante investigar en estos dos aspectos en los valles de La Convención para proponer soluciones en el tratamiento 
                    de suelos y control de plagas a los agricultores de la provincia.
                  </p>
                  </Grid>
                  <Grid container xs={12} sm={4}>
                    <Avatar alt="Remy Sharp" src={investigacionInicio} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                    <Avatar alt="Remy Sharp" src={investigacionInicio} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                  </Grid>
                  <Grid container xs={12} sm={4}>
                    <Avatar alt="Remy Sharp" src={investigacionInicio} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                    <Avatar alt="Remy Sharp" src={investigacionInicio} style={{marginLeft: '50px', width: '300px', height: '300px'}} />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                  <h4 className="investigation--title">3. LÍNEAS DE INVESTIGACIÓN INTERCULTURALES</h4>
                  <p className="investigation--description" >Promovidas por la VPI, responden al desarrollo de investigaciones que brindarán las bases del conocimiento 
                    en temas interculturales de nuestras poblaciones andino – amazónicas, permitiéndonos entender y diferenciar los tipos de saberes que serán incorporados 
                    en el proceso de enseñanza aprendizaje, además de permitirnos iniciar con el proceso de valoración y respeto hacia otras formas de saber y conocer el entorno, y de ese modo desarrollar e internalizar la interculturalidad respondiendo a la naturaleza institucional de la UNIQ.<br></br>
                    Estas líneas de investigación son: 
                  </p>
                  <h5 className="investigation--title">3.1. CONOCIMIENTOS ANCESTRALES Y COSMOVISIÓN ANDINO - AMAZÓNICA: REGISTRO Y PROTECCIÓN</h5>
                  <p className="investigation--description" ></p>
                  <h5 className="investigation--title">3.2. SOCIO - ECONOMÍA Y AMBIENTE EN COMUNIDADES ANDINO AMAZÓNICAS</h5>
                  <p className="investigation--description" ></p>
                  <h5 className="investigation--title">3.3. RECURSOS NATURALES Y AMBIENTE EN COMUNIDADES ANDINO AMAZÓNICAS</h5>
                  <p className="investigation--description" ></p>
                  <h5 className="investigation--title">3.4. GESTIÓN Y MANEJO SOSTENIBLE DE LA DIVERSIDAD BIOLÓGICA Y GRUPOS HUMANOS</h5>
                  <p className="investigation--description" ></p>
                  <h5 className="investigation--title">3.5. DESARROLLO SOSTENIBLE DE POBLACIONES ANDINO – AMAZÓNICOS: ECONOMÍA, SALUD, EDUCACIÓN, BIENESTAR Y RECURSOS NATURALES</h5>
                  <p className="investigation--description" ></p>
                  </Grid>
              </Grid>
            </div>
        </div>
        )
    }
}

export default Investigation;