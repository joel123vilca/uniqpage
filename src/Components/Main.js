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
        <Route  path="*" component={Notfound}/>
    </Switch>
)
export default Main;