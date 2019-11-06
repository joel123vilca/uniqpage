import React, { Component } from 'react';
import docentes from '../image/docentes.jpg';
import logo1 from '../image/auspiciadores/images (1).jpg';
import logo2 from '../image/auspiciadores/images (2).jpg';
import logo3 from '../image/auspiciadores/images.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './seminary.css'
import ubicacion from '../image/placeholder-on-map-paper-in-perspective (1).png'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel'
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
        imagen:logo1
      },
      {
        imagen:logo2
      },
      {
        imagen:logo3
      }
    ]
    const galleryItems= auspiciadores.map((i) => <img src={i.imagen} key={i} className="carousel-imagen" />);

    const stagePadding = {
      paddingLeft: 15,     // in pixels
      paddingRight: 15
  }
    const responsive = {
      0: { items: 1 },
      1024: { items: 5 },
    }
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <img
            className="d-block w-100 teacher--banner"
            src={docentes}
            alt="banner docentes"
        />
        <br></br>
        <h2 className="bulletin-title">CONOCE A NUESTROS AUSPICIADORES</h2>
        <AliceCarousel 
          items={galleryItems}
        mouseTrackingEnabled 
        responsive={responsive}
          autoPlay={true}
          stagePadding={stagePadding}
        >
        {/* <img src={docentes} onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
        {/* <img src={docentes} onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
        {/* <img src={docentes} onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
        {/* <img src={docentes} onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
        {/* <img src={docentes} onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
      </AliceCarousel>
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
                  8:00 am a 7:00 pm 
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
        
        <h2 className="bulletin-title">CONOCE A NUESTROS PONENTES</h2>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'350px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <img 
                  src='https://www.comprarbanderas.es/images/banderas/400/1075-espana-escudo-ii-republica_400px.jpg'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | España</span>
                <hr/>
                <Typography gutterBottom variant="h5" component="h2">
                  Dr. JOAN LARA AMAT Y LEÓN
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
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'350px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <img 
                  src='https://www.comprarbanderas.es/images/banderas/400/1075-espana-escudo-ii-republica_400px.jpg'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | España</span>
                <hr/>
                <Typography gutterBottom variant="h5" component="h2">
                  Mgt. CARLOS GANOZA TOKASHIKI
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Master in Business Administration (MBA) – Escuela Superior de Administración y Dirección de Empresas (ESADE) – Barcelona – España.
                  Auditor Contable – Price Waterhouse Coopers (PwC) – Barcelona – España.
                  Regional Manager para Oriente Medio y Norte de África – Industrias Ópticas (Indo) – España.
                  Industria Química del Norte – Empresa dedicada a la distribución y comercialización de material químico – Gerente General.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'350px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <img 
                  src='data:image/png;base64,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'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Mexico</span>
                <hr/>
                <Typography gutterBottom variant="h5" component="h2">
                  Dra. Luisa Sterponi
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Pertenece al equipo científico del Laboratorio GIS, GPS e Cartografía Automática del Departamento de Ciencias de la Università Degli Studi Roma Tre.
                Especialista Senior en GEOMÁTICA.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'300px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <img 
                  src='data:image/jpeg;base64,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'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Belgica</span>
                <hr/>
                <Typography gutterBottom variant="h5" component="h2">
                  Lic. CHRISTOPHE DANIEL TERNAY
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Coach para emprendedores. Especialista en comercio internacional Marketing y gestión de personal
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'300px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <img 
                  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEg8NDQ8VDw0OD
                  RYPDRANEA8NEA4NFR0iFhURExMYISghGBomHhYULT0iJSkvLi4uFx81ODMtNygtLisBCgoKDg0OGxAQGi
                  8lHSUrKy0vLS0tLS0tLS0tLy0tLy8rLS0tKy0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALo
                  BDwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcEBggFAwL/xAA/EAACAQICCAIHBAkEAwAAA
                  AAAAQIDBBESBQYHITRRdLIxQRMUI2FxgZEiMmKhM0JSU3KSscHRc4Lh8BVEVP/EABsBAQACAwEBAAAAAAAA
                  AAAAAAABBAMGBwIF/8QALxEBAAIBAgUDBAEDBQEAAAAAAAECAwQxBQYRM3EhNLESIkFREzJCYYGRocHwFP/aA
                  AwDAQACEQMRAD8A0souqgAAAAAAAFhbFuKuemXcZcO7WuY+1XyuJFiGnpJAAAAAAAAAAAAAAACGBzRpvibrqq
                  vcylbd0vRe3p4j4YRC0AAAAAAAlPDegiY6oCQAAAAAAACwti3FXPTLuMuHdrXMfar5XEixDT0kgAAAAAAAAAA
                  AAAABDA5o03xN11VXuZStu6Xovb08R8MIhaAAAAAAAAAAAAAAAAACwti3FXPTLuMuHdrXMfar5XEixDT0kgAAAA
                  AAAAAAAAAABDA5o03xN11VXuZStu6Xovb08R8MIhaAAAAAAAAAAAAAAAAACwti3FXPTLuMuHdrXMfar5XEixDT0kgAAAA
                  AAAAAAAAAABDA5o03xN11VXuZStu6Xovb08R8MIhaAAAAAAAAAAAAAAAAACwti3FXPTLuMuHdrXMfar5XEixDT0kgAAAAAEM
                  AgJAAAAAABDA5o03xN11VXuZStu6Xovb08R8MIhaAAAAAAAAAAAAAAAAACwti3FXPTLuMuHdrXMfar5XEixDT0kgAAAAIA0Xa
                  lrPOzpU6FvLLc15Zsy8adKDxb+bwX1MeS/0w+zwfQRqbza0fbDZNV9MxvraldR3OccKkf2Kq3Sj9T1WesPn6zTTp8045/wDQ9b
                  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'
                  alt="banner docentes"
                  style={{width:'60px',height:'40px'}}
                ></img>
                <span> | Canada</span>
                <hr/>
                <Typography gutterBottom variant="h5" component="h2">
                  M. Sc. RACHELLE PUGET
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Canadiense colaborando con Ayni Desarrollo, una ONG que se dedica a promover los derechos humanos, contribuir al mejoramiento de la calidad de vida y el bienestar social de la población en situación de pobreza y al fortalecimiento de los valores democráticos.
                Estudios superiores en Derechos Laborales a la Universidad de Montreal en Canadá.
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'300px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lic. CHRISTOPHE DANIEL TERNAY
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'300px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={{maxWidth:'300px'}}>
            <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={docentes}
              title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        
    </div>
    )
  }
}

export default Seminary;