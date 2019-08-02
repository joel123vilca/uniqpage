import React, { Component } from 'react';
import interculturalidad from '../image/interculturalidad.jpg'; 
import { Card, CardText, List, ListItem, ListItemAction, ListItemContent, Icon} from 'react-mdl';

class Culture extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <img
          className="d-block w-100 slider"
          src={interculturalidad}
          alt="banner interculturalidad"
        />
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <h2 className="bulletin-title">Interculturalidad</h2>
        <CardText style={{ textIndent: '50px', textAlign: 'justify',letterSpacing: '1px', alignItems:'center'}}>
        “La interculturalidad toma como punto de partida, los elementos propios de cada cultura, para una relación de integridad cultural con otros grupos humanos; permitirá la apropiación de ciertos elementos culturales para un grupo étnico, armonizando su cultura,
         el cual, servirá para interactuar con otros grupos humanos que entran en contacto con él” (CAPELLA, Jorge, 1993, pp.16-17)
        </CardText>
        <CardText style={{ textIndent: '50px', textAlign: 'justify',letterSpacing: '1px', alignItems:'center'}}>
        La interculturalidad es la relación que se establece entre los distintos grupos humanos por su diversidad étnica, social, cultural, lingüística y biológica que se expresa en distintos modos de hablar,
         de pensar, de razonar en cada grupo étnico de nuestra sociedad multilingüe y pluricultural.
        </CardText>
        </Card>
        <br></br>
        <h2 className="bulletin-title">LINEAMIENTOS DE INTERCULTURALIDAD</h2>
        <List style={{width: '90%'}}>
          <ListItem threeLine>
            <ListItemContent subtitle="La UNIQ tiene el rol de revalorizar, sistematizar y difundir los conocimientos/prácticas indígenas para incorporarlos en la formación e investigación universitaria. Los aportes de los conocimientos, innovaciones locales, son parte de la historia tecnológica de los Andes y la Amazonía, por eso que este bagaje de conocimientos sigue siendo la base para el desarrollo regional y nacional.">1.La UNIQ revalora, fortalece, difunde el conocimiento y saber indígena como reconocimiento explícito de su aporte al desarrollo sostenible.</ListItemContent>
          </ListItem>
          <ListItem threeLine>
            <ListItemContent subtitle="El objetivo es capitalizar los aprendizajes a partir de experiencias diversas, sobre todo para no repetir errores. No es pertinente “partir de cero”, cuando ya hay conocimiento y lecciones sobre éste y otros temas, los que tienen que servir de referencia.">2.Aprender de las experiencias nacionales e internacionales para promover el diálogo de saberes.</ListItemContent>
          </ListItem>
          <ListItem threeLine>
            <ListItemContent subtitle="Proceso de consulta con la participación de actores clave, en el que la UNIQ busca mecanismos participativos para visibilizar y analizar las diferentes visiones, expectativas que tienen diversos multi-actores respecto al rol, oferta, estrategias de la UNIQ como una Universidad inclusiva y moderna.">3.La EIC-UNIQ. es producto de un proceso de construcción participativa.</ListItemContent>
          </ListItem>
          <ListItem threeLine>
            <ListItemContent subtitle="En este sentido, la UNIQ está proponiendo la creación de la Red de Universidades Interculturales del Perú (RUI-Perú), como un espacio para el aprendizaje colectivo y la generación de sinergias, que tengan la capacidad de generar beneficios tangibles para sus aliados (Beneficios para la RED), y la universidad peruana, de manera más general. Existen 4 universidades 
            interculturales en el Perú de reciente creación, que serían la base para constituir esta Red.">4. Se aprende y avanza en alianza con Redes Nacionales e Internacionales. Gestión del Conocimiento (GoCo)</ListItemContent>
          </ListItem>
          <ListItem threeLine>
            <ListItemContent subtitle="Alumnos, docentes y administrativos, de las Escuelas Profesionales de la UNIQ, conocen, manejan e incorporan 
            el enfoque de interculturalidad en sus tareas cotidianas, lo que se logra fortalecer a través de un Programa sobre IC, que se enfoca sobre metodologías y estrategias para incorporar el enfoque de IC en la dinámica universitaria.">5.	El Enfoque de Interculturalidad al interior de la UNIQ, es política institucional transversal.</ListItemContent>
          </ListItem>
          <ListItem threeLine>
            <ListItemContent subtitle="La experiencia de la EIC-UNIQ tiene que ser documentada, sistematizada, publicada y difundida a través de diversos mecanismos como un logro institucional y un aporte a la región y el país. Es un sistema de devolución de la información (Dar cuenta pública) de un proceso basado en consultas.">6.	Se sistematiza y difunde la Estrategia de Interculturalidad (EIC-UNIQ) a nivel regional, nacional e internacional.</ListItemContent>
          </ListItem>
          <ListItem threeLine>
            <ListItemContent subtitle="La construcción de experiencias como la EIC-UNIQ por la movilización de recursos públicos y por la importancia temática del enfoque de interculturalidad a nivel universitario, debe trascender para aportar a las políticas nacionales. Por tanto, tiene que estar alineada y en armonía con las políticas de Estado sobre este tema, desde donde se está intentando la construcción de una ciudadanía intercultural. ">7. La EIC-UNIQ aporta a las políticas de la SUNEDU y el Viceministerio de Interculturalidad, respecto del enfoque de interculturalidad en la universidad peruana.</ListItemContent>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Culture;