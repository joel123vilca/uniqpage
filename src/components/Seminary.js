import React, { Component } from 'react';
// import docentes from '../image/docentes.jpg';
import ReactPlayer from 'react-player'
import logo1 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.00.jpeg';
import logo2 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.01.jpeg';
import logo3 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.03 (1).jpeg';
import logo4 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.03.jpeg';
import logo5 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.04 (1).jpeg';
import logo6 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.04 (2).jpeg';
import logo7 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.04.jpeg';
import logo8 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.05 (1).jpeg';
import logo9 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.05 (2).jpeg';
import logo10 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.05.jpeg';
import logo11 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.06 (1).jpeg';
import logo12 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.06.jpeg';
import logo13 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.03 (2).jpeg';
import logo14 from '../image/auspiciadores/WhatsApp Image 2019-11-06 at 16.02.02.jpeg';
import docentes from '../image/pont1.png';
import seminario from '../image/seminario.jpeg';
import pont2 from '../image/pont2.png';
import pont3 from '../image/pont3.png';
import pont4 from '../image/pont4.png';
import pont5 from '../image/pont5.png';
import pont6 from '../image/pont6.png';
import pont7 from '../image/pont7.png';
import pont8 from '../image/pont8.png';
import pont9 from '../image/pont9.png';
import pont10 from '../image/pont10.png';
import pont11 from '../image/pont11.png';
import pont12 from '../image/pont12.png';
import pont13 from '../image/pont13.png';
import pont14 from '../image/pont14.png';
import pont15 from '../image/pont15.png';
import peru from '../image/peru.png';
import mexico from '../image/mexico.png';
import canada from '../image/canada.png';
import francia from '../image/francia.png';
import adriana from '../image/adriana.png';
import brasil from '../image/brasil.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './seminary1.css'
import ubicacion from '../image/placeholder-on-map-paper-in-perspective (1).png'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel'
import Paper from '@material-ui/core/Paper';
// import './seminary.css';

class Seminary extends Component {
  render() {
    const handleOnDragStart = (e) => e.preventDefault()
    
    const auspiciadores=[
      {
        imagen:logo1
      },
      {
        imagen:logo2
      },
      {
        imagen:logo3
      },
      {
        imagen:logo4
      },
      {
        imagen:logo5
      },
      {
        imagen:logo6
      },
      {
        imagen:logo7
      },
      {
        imagen:logo8
      },
      {
        imagen:logo9
      },
      {
        imagen:logo10
      },
      {
        imagen:logo11
      },
      {
        imagen:logo12
      },
      {
        imagen:logo13
      },
      {
        imagen:logo14
      }
    ]
    const galleryItems= auspiciadores.map((i) => <img src={i.imagen} key={i} className="carousel-imagen" />);

    const stagePadding = {
      paddingLeft: 15,     // in pixels
      paddingRight: 15
  }
    const responsive = {
      0: { items: 1 },
      1024: { items: 6 },
    }
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <img
            className="d-block w-100 teacher--banner"
            src={seminario}
            alt="banner docentes"
        />
        <br></br>
        
        <Grid container spacing={0} className="margenes-texto-franja">
        <Grid item  xs={12} sm={6} style={{paddingTop:'6%'}}>
          <p className="bulletin-title">INFORMES E INSCRIPCIONES: </p>
        </Grid>
        <Grid item xs={12} sm={6} style={{textAlign:'left'}}>
          <p className="texto-informativo">OFICINA DEL CENTRO PREUNIVERSITARIO DE LA UNIQ. El Arenal s/n Pabellón 7.</p>
          <p className="texto-informativo">UNIVERSIDAD ANDINA DEL CUSCO Filial Quillabamba.</p>
          <p className="texto-informativo">AGENCIA DE VIAJES MEGANTONI TRAVEL. Frente a la Plaza de Armas de Quillabamba.</p>
          <p className="texto-informativo">OFICINA DE LA DIRECCIÓN DE TURISMO DE LA MUNICIPALIDAD PROVINCIAL DE LA CONVENCIÓN.</p>
        </Grid>
      </Grid>

        <Grid container spacing={4} className="franja-informativa">
          <Grid item xs={12} sm={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                  <img style={{width:'50px'}} src="http://ciistacna.com/2018/src/2018/assets/images/calendario.png">
                  </img>
              </Grid>
              <Grid item xs={12} sm={9}>
                <p className="titulo-franja">
                  Fecha
                </p>
                <p>
                  del 27 al 28 de noviembre
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={3}>
                  <img style={{width:'50px'}} src="http://ciistacna.com/2018/src/2018/assets/images/reloj(1).png">
                  </img>
              </Grid>
              <Grid item xs={12} sm={9}>
                <p className="titulo-franja">
                  Horario
                </p>
                <p>
                  8:00 am a 8:00 pm 
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={3}>
                  <img style={{width:'50px'}} src="http://ciistacna.com/2018/src/2018/assets/images/ponente-en-una-conferencia(1).png">
                  </img>
              </Grid>
              <Grid item xs={12} sm={9}>
                <p className="titulo-franja">
                  Ponentes
                </p>
                <p>
                  Nacionales e Internacionales
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={3}>
                  <img style={{width:'50px'}} src={ubicacion}>
                  </img>
              </Grid>
              <Grid item xs={12} sm={9}>
                <p className="titulo-franja">
                  Lugar
                </p>
                <p>
                  Teatro Municipal de Quillabamba
                </p>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
        
        <h2 className="bulletin-title">Conoce a nuestros ponentes</h2>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={docentes}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src='https://www.comprarbanderas.es/images/banderas/400/1075-espana-escudo-ii-republica_400px.jpg'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | España</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Dr. JOAN LARA AMAT Y LEÓN
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "TURISMO, CIUDADANIA Y DESARROLLO RETOS DE UN TURISMO SOSTENIBLE, PARA UN MUNDO SOSTENIBLE"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Investigador en Filosofía Política, Ciencia Política y Relaciones Internacionales.
                Diploma de Estudios Avanzados (DEA): “Ética, Política y Racionalidad en la Sociedad Global”, Universitat de Barcelona (UB).
                Magister-Licenciado en Filosofía por la Universitat de Barcelona (UB). Diploma en Ciencia Política y Relaciones Internacionales por la Pontificia Universidad Católica
                del Perú (PUCP)
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont2}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src='https://www.comprarbanderas.es/images/banderas/400/1075-espana-escudo-ii-republica_400px.jpg'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | España</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Mgt. CARLOS GANOZA TOKASHIKI
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "DESARROLLO DEL TURISMO MUNDIAL: GENERADOR DE RIQUEZA Y OPORTUNIDADES PARA EMPRENDER RETOS Y SOSTENIBILIDAD"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Master in Business Administration (MBA) – Escuela Superior de Administración y Dirección de Empresas (ESADE) – Barcelona – España.
                  Auditor Contable – Price Waterhouse Coopers (PwC) – Barcelona – España.
                  Industria Química del Norte – Empresa dedicada a la distribución y comercialización de material químico – Gerente General.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont3}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={mexico}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Mexico</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Dra. Luisa Sterponi
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "LA TECNOLOGIA GEOMÁTICA APLICADA AL TURISMO: CONOCIMIENTO Y MODELAMIENTO ESPECIAL DEL TERRITORIO PARA UN DESARROLLO TURISTICO EFICAZ Y SOSTENIBLE"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Pertenece al equipo científico del Laboratorio GIS, GPS e Cartografía Automática del Departamento de Ciencias de la Università Degli Studi Roma Tre.
                Especialista Senior en GEOMÁTICA.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont4}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'350px'}}>
                <img 
                  src={francia}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Francia</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Lic. CHRISTOPHE DANIEL TERNAY
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "EMPRENDIMIENTOS ONLINE: DE SUEÑOS A REALIDAD"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Coach para emprendedores. Especialista en comercio internacional Marketing y gestión de personal
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont5}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={canada}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Canada</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  M. Sc. RACHELLE PUGET
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "LAS MUJERES EN EL MERCADO LABORAL Y LOS RETOS PARA ALCANZAR IGUALDAD DE GENERO"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Canadiense colaborando con Ayni Desarrollo, una ONG que se dedica a promover los derechos humanos, contribuir al mejoramiento de la calidad de vida y el bienestar social de la población en situación de pobreza y al fortalecimiento de los valores democráticos.
                Estudios superiores en Derechos Laborales a la Universidad de Montreal en Canadá.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont6}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                Dr. MIGUEL ÁNGEL CAPUÑAY REATEGUI
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "EL COMERCIO EXTERIOR DE SERVICIOS TURISTICOS EN EL PERU, PESPECTIVAS Y TENDENCIAS"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Jurista en Derecho Internacional y Master of Law por la Universidad de Kiev, Ucrania.
                  Doctor en Administración por la Universidad de Buenos Aires (UBA), Argentina.
                  Ex Gerente de Juris Aduanas SRL. Consultores en Comercio Exterior y
                  Aduanas.
                  Ex Consultor externo de PROMPERU, ADEX, Cámara de Comercio de Lima,
                  Gobierno Regional de Arequipa y de Tacna en temas de negocios
                  internacionales.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={adriana}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={brasil}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Brasil</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                Dra.  ADRIANA AGUIAR PÉREZ
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "ÉTICA EN LOS EMPRENDIMIENTOS PARA EL TURISMO SOSTENIBLE"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Investigadora dedicada al canon minero y petrolero, fondos públicos, políticas púbicas y sociales y conflictos socioambientales. 
Doctorado en Trabajo Social - UFRJ; Doctorado en Gestión Económica Global - UNMSM; Magíster en Trabajo Social - UERJ; Licenciada en Trabajo Social - UFF. 
                </Typography>
                
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont7}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src='https://www.comprarbanderas.es/images/banderas/400/1075-espana-escudo-ii-republica_400px.jpg'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | España</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Lic. ROCÍO ROJAS
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "DESARROLLO DEL GEOTURISMO EN EL CONTEXTO DE INNOVACIÓN EN LA ZONA DE QUILLABAMBA"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Experta en tecnologías aplicadas al turismo, organización de eventos de Investigación, creación y gestión del conocimiento.
                  Mentora SMED (Sistema de Medición de Excelencia de Destinos). Fundadora de Turistech, consultora tecnológica enfocada a la innovación y estrategia digital turística.
                  Directora General para Perú y España del Centro Mundial de Excelencia de Destinos, CED.
                  Estudios en Universidad de Málaga – España.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont8}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Lic. ELENA GONZALES
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "¿COMO GESTIONAMOS LA CALIDAD DE LOS SERVICIOS PRESTADOS PARA LA INNOVACION Y SOSTENIBILIDAD EN EL SECTOR TURISTICO?"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Gerente de Operaciones de Empresa Andean Explorer’s Cusco (Operador de Turismo con 19 años en el mercado Certificada con ISO 9001-14001 y Tourcert).
                  Consultora de matriz de indicadores de evaluación Premio Q ́ente 2019 DIRCETUR Cusco.
                  Consultora en Interpretación del Sistemas de Gestión de la Calidad ISO 9001-2015 y Sistemas de Gestión Ambiental ISO 14001:2015.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont9}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                Lic. ROBERTO ALARCÓN RODRÍGUEZ
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "ÉTICA EN LOS EMPRENDIMIENTOS PARA EL TURISMO SOSTENIBLE"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lic. en Turismo y Ciencias Administrativas, Universidad San Antonio Abad del Cusco.
                  Empresario del sector turismo con especialidad en Management (Learning center DALLAS Texas USA) Travel Agents Seminars (Metro Dade County - Miami Florida USA).
                  Consultor en Gestión Turística y negocios inclusivos (Cooperación Suiza OGD)
                  Facilitador en procesos de ISO 9001-2000.
                  Experto en Marketing Digital.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont10}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Dra. VIVIANETT SERNA
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "EL EMPRENDIMIENTO FEMENINO PERUANO Y LA NECESIDAD DE REGULACION NORMATIVA"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Directora de la Filial de la Universidad Andina del Cusco. Especialista en materia de Familia y Contrataciones,
                  Egresada en Maestría de Derecho Constitucional
                  Jefa de la División de la DEMUNA en la Municipalidad Distrital de Maranura.
                  Asesora Legal de Cooperativas Financieras y Docente Universitaria desde el 2011
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont11}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                Mgt. HEBER PAZ SALAZAR
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "PLANIFICACION Y GESTION TURISTICA"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Director de planificación de la Dirección Regional de Comercio Exterior y Turismo Gobierno Regional Cusco.
                  gt. en Gestión pública y educación ambiental y desarrollo sostenible, proyectista.
                  Especialista en ecoturismo y planificación turística.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont12}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Mgt. CARLOS A. HUAMANTICA
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "ÉTICA EN LOS EMPRENDIMIENTOS PARA EL TURISMO SOSTENIBLE"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Mgt. en Contabilidad-Mención en Auditoria (En Curso) Universidad Nacional San Antonio Abad de Cusco.
                  Gerente en ANCESTRAL INKAS FOOD SAC.
                  Asesor de negocios 1 en Mibanco.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont13}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Bach. LUDGARDO PIMENTEL
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "ÉTICA EN LOS EMPRENDIMIENTOS PARA EL TURISMO SOSTENIBLE"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Gestor Comercial En Copaivl.
                  Representante de Diversas Cooperativas de Quillabamba en la Cámara de Comercio de Lima.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont14}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Mgt. FRANCISCO CURRO
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "LA INTELIGENCIA ARTIFICIAL Y EL TURISMO"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Ing. Estadístico e informático
                  Asesor de proyectos en la parte de la metodología. Docente ordinario de la UNIQ.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card style={{maxWidth:'280px'}}>
            <CardActionArea>
            <img
              component="img"
              alt="Contemplative Reptile"
              style={{height:'240px', width:'250px'}}
              src={pont15}
              title="Contemplative Reptile"
            />
            <CardContent style={{height:'380px'}}>
                <img 
                  src={peru}
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Peru</span>
                <hr/>
                <Typography variant="subtitle1" gutterBottom>
                  Dra. GIOVANNA SERNA
                </Typography>
                <Typography style={{background:'#376970',color:'white'}}>
                  TEMA : "ÉTICA EN LOS EMPRENDIMIENTOS PARA EL TURISMO SOSTENIBLE"
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Directora de la E.P. de Ecoturismo de la Universidad Nacional Intercultural de Quillabamba.
                  Doctorado y Pos Doctorado en Educación Superior e Investigación, y en Administración.
                  Mag. en Administración; en Investigación y Educación Superior; en Gestión en Turismo; en Medio Ambiente y Desarrollo Sostenible con mención en Gestión Ambiental.
                  Profesional y experiencia en Administración de Empresas, Marketing en Servicios, Talento Humano, Liderazgo y Desarrollo Organizacional. Experiencia en administración en empresas de servicios y de producción en Perú y en Brasil.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={0} className="margenes-texto-franja">
        <Grid item xs={12} style={{textAlign:'center'}}>
          <p className="bulletin-title">Para más información puedes escribir a los correos</p>
          <div style={{paddingTop:'15px'}}>
            <p className="texto-informativo">gia.silvass@gmail.com</p>
            <p className="texto-informativo">giovana.serna@uniq.edu.pe</p>
          </div>          
        </Grid>
      </Grid>

        <h2 className="bulletin-title">Conoce a nuestros auspiciadores</h2>
        <div style={{marginBottom:'10px'}}>
        <AliceCarousel 
        buttonsDisabled={true}
          items={galleryItems}
        mouseTrackingEnabled 
        responsive={responsive}
          autoPlay={true}
          stagePadding={stagePadding}
          autoPlayInterval={1000}
        >
      </AliceCarousel>
      </div>
        <br></br>
        <div className="precios">
          <h2 className="precios-title">INVERSIÓN</h2>
          <hr style={{borderColor:'white',width:'60%'}}/>
            <h3 className="precios-subtitulo">Costo para estudiante de la UNIQ y UAC S/. 20.00</h3>
            <h3 className="precios-subtitulo2">Costo para publico en general S/. 35.00</h3>
          <hr style={{borderColor:'white',width:'60%'}}/>
          <br></br>
        </div>

        <Grid container spacing={0} >
        <Grid item  xs={12} sm={12} style={{marginBottom:'50px'}}>
         <h2 className="bulletin-title">Conoce Quillabamba</h2>
          <ReactPlayer
            className="player-container"
            url='https://www.youtube.com/watch?v=J3aOEvtwVoA' 
           />
        </Grid>
        </Grid>
    </div>
    )
  }
}

export default Seminary;