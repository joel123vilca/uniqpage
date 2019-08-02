import React, { Component } from 'react';
import universidad from '../image/universidad-v2.jpg';
class ViewUniq extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
          className="d-block w-100 slider"
          src={universidad}
          alt="banner universidad"
        />
        <div style={{marginLeft:'10%',marginRight:'10%',paddingTop:'3%',paddingBottom:'3%'}}>
    <center>
    <h2 className="career-title">Reseña histórica</h2>
      <p style={{textAlign:"justify"}}>
      La Universidad Nacional Intercultural de Quillabamba fue creada por Ley N° 29620 de fecha 30 de noviembre del 2010, sobre la base de las carreras profesionales de Agronomía Tropical, Ingeniería de Industria Alimentaria y Ecoturismo de la Universidad Nacional de San Antonio de Abad del Cusco con sede en Quillabamba.
El 22 de enero del 2014 se aprueba su Proyecto de Desarrollo Institucional (PDI) por Resolución N° 024-2014-CONAFU, constituyéndose como pliego presupuestario el 26 de octubre del 2014 por decreto Supremo N° 292-2014-EF.
La Municipalidad Provincial de la Convención por acuerdo de Concejo N° 091-2015-SGMPLC donó a la Universidad a perpetuidad 15.11 hectáreas de terrenos en el Fundo Potrero donde se construirá la moderna ciudad universitaria.
En cumplimiento de la Ley N° 29620, la Universidad Nacional de San Antonio de Abad del Cusco por Resolución N° R-2446-2015-UNSAAC del 28 de diciembre del 2015, transfiere a la UNIQ la infraestructura, personal docente y administrativo de la Sede Quillabamba en los extremos de dicha Ley.
      </p>

      <h2 className="career-title">La Universidad</h2>
      <p style={{textAlign:"justify"}}>
      La Universidad Nacional Intercultural de Quillabamba, en adelante, la Universidad o la UNIQ; es una comunidad académica orientada a la investigación científica y a la docencia, que brinda una formación profesional de excelencia para sus estudiantes en aspectos humanísticos, científicos y tecnológicos, con una clara conciencia de nuestro país como realidad multicultural. Adopta el concepto de educación como derecho fundamental y servicio público esencial. Está integrada por docentes, estudiantes y graduados.
La Universidad Nacional Intercultural de Quillabamba, es una entidad de derecho público que goza de personería jurídica y patrimonio propio para el desarrollo de sus funciones y la consecución de sus fines.
      </p>
    </center>
  </div>
    </div>
    
    )
  }
}

export default ViewUniq;