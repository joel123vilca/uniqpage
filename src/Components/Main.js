import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Careers from './Careers';
import Culture from './Culture';
import Investigation from './Investigation';
import Admission from './Admission';
import Alliances from './Alliances';
import Notfound from './Notfound';
import Activities from './Activities';
import ViewUniq from './ViewUniq';
import Teachers from './Teachers';
import Mision from './Mision';
import Authorities from './Authorities';
import ViewBulletin from './Viewbulletin';
import Civil from './Civil';
import Calls from './Calls';
import Ecoturismo from './Ecoturismo';
import Alimentaria from './Alimentaria';
import Tropical from './Tropical';
import Documents from './Documents';
import Services from './Services';
import Regulation from './Regulation';
import Propertie from './Propertie';
import CodeEthics from './CodeEthics';
import News from './News';
import Transparenci from './Transparenci';
import Home from './Home';
import Resolutions from './Resolutions';
import Bulletins from './Bulletins';
import ListDocuments from './ListDocuments';
import Oci from './Oci';
import Quotations from './Quotations';
import Directory from './Directory';
import Seminary from './Seminary';
import Cepre from './Cepre';
import Corona from './corona';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/carreras" component={Careers} />
        <Route  path="/civil" component={Civil} />    
        <Route  path="/ecoturismo" component={Ecoturismo} /> 
        <Route  path="/alimentarias" component={Alimentaria} /> 
        <Route  path="/tropical" component={Tropical} /> 
        <Route  path="/inicio" component={LandingPage} />
        <Route  path="/Interculturalidad" component={Culture} />
        <Route  path="/investigacion" component={Investigation} />
        <Route  path="/admision" component={Admission} />
        <Route  path="/alianzas" component={Alliances} />
        <Route  path="/boletin"  component={Activities}/>
        <Route  path="/universidad" component={ViewUniq}/>
        <Route  path="/docentes" component={Teachers}/>
        <Route  path="/mision" component={Mision}/>
        <Route  path="/lineas-investigacion" component={Investigation}/>
        <Route  path="/autoridades" component={Authorities} />
        <Route  path="/actividad/:id" component={ViewBulletin} />
        <Route  path='/convocatorias' component={Calls}/>
        <Route  path='/documentos'  component={Documents}/>
        <Route  path='/servicios'  component={Services}/> 
        <Route  path='/reglamento' component={Regulation} />
        <Route  path='/propiedad' component={Propertie} />
        <Route  path='/codigo-de-etica' component={CodeEthics} />
        <Route  path='/comunicados' component={News} />
        <Route  path='/transparencia' component={Transparenci}/>
        <Route  path='/datosuniq' component={Home} />
        <Route  path='/resoluciones' component={Resolutions} />
        <Route  path='/boletines'  component={Bulletins} />
        <Route  path='/gestion-academica' component={ListDocuments} />
        <Route  path='/oci' component={Oci} />
        <Route  path='/abastecimientos' component={Quotations} />
        <Route  path='/directorioelectronico' component={Directory} />
        <Route  path='/seminario' component={Seminary} />
        <Route  path='/cepre' component={Cepre} />
        <Route  path='/disposiciones-cuarentena' component={Corona} />
        <Route  path="*" component={Notfound}/>
    </Switch>
)
export default Main;