import React, { Component } from 'react';
import {Card, CardText} from 'react-mdl';
import mision from '../image/mision.jpg';
class Mision extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <img
        className="d-block w-100 slider"
        src={mision}
        alt="banner mision"
      />
      <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <h2 className="bulletin-title">Misión</h2>
        <CardText style={{ textIndent: '50px', textAlign: 'justify',letterSpacing: '1px', alignItems:'center'}}>
        "Los peruanos acceden a una educación que les permite desarrollar su potencial desde la primera infancia y convertirse en ciudadanos que valoran su cultura, conocen sus derechos y responsabilidades, desarrollan sus talentos y participan de manera innovadora, competitiva y comprometida en las dinámicas sociales, 
        contribuyendo al desarrollo de sus comunidades y del país en su conjunto".
        </CardText>
        <CardText style={{ textIndent: '50px', textAlign: 'justify',letterSpacing: '1px', alignItems:'center'}}>
        "Maganiro timaigatsirira aka peroku, ikogakoigaka isankevantavageigakera kametiniri iragaveaigakeniri irogovageiganakera, onti okogakotaka intsititagaiganakenkanira ityomiakyanira, impo irantaritanakera, irogotasanovageigakeniri, aikiro irogoigakerora ganiri ipegakoigaro yogameigarira, ganiri tyani verajairi, aikiro irogoigakera intaigakemparora irantaneegi, ariompari inkogasanoiganakeri irogotasanovageiganakera, aikiro irogogetanakerora tekyarira irogotumageigero maika, intentagaiganakemparira pashini govageigatsirira inkañoiganakemparira iriroegi, irogotagaiganakerira maganiro ishaninkaegi tyara inkantaigakempa itimayganakera, irogotagageiganakerira, tyara inkantaigakempa aiompaniri irogovageiganakeri 
        paniropage itimageigira intimavageigakeniri kameti maganiro timaigatsirira aka kipatsiku" (Traductor. Angel Diaz Olivera)
        </CardText>
      </Card>
      <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
        <h2 className="bulletin-title">Visión</h2>
        <CardText style={{ textIndent: '50px', textAlign: 'justify',letterSpacing: '1px', alignItems:'center'}}>
        "Brindar formación profesional universitaria de calidad al estudiante universitario, en base a la generación de conocimiento humanístico, cientifico, 
        tecnológico y con enfoque intercultural, que contribuye al desarrollo sostenible de la sociedad".
        </CardText>
        <CardText style={{ textIndent: '50px', textAlign: 'justify',letterSpacing: '1px', alignItems:'center'}}>
        "Intimaiganakeniri matsigenkaegi govageiganankitsinerira isankevantavageigakera ontimaigakerira irantaneegi, ontirari isankevantaigake anta pairorira avisake ogotagantagetunkanirira pairorira okogagetaka ogotakenkanira ontirari origotagaigakenkani tyara inkantaigakempa irogoiganakera intimavageigakera kameti, irogotasanovageiganakera, irogoaganogetakenkanira terira irogoigero maika, 
        aikiro irogotagagetakenkanira irashiegi iriroegi yogamegeigarira, okari oka amutakoigakeriniri tyara inkantaigakempa."(Traductor. Angel Diaz Olivera)
        </CardText>
      </Card>
    </div>
    )
  }
}

export default Mision;