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

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/carreras" component={Careers} />
        <Route  path="/inicio" component={LandingPage} />
        <Route  path="/Interculturalidad" component={Culture} />
        <Route  path="/investigacion" component={Investigation} />
        <Route  path="/admision" component={Admission} />
        <Route  path="/alianzas" component={Alliances} />
        <Route  path="/boletin"  component={Activities}/>
        <Route  path="/universidad" component={ViewUniq}/>
        <Route  path="/docentes" component={Teachers}/>
        <Route  path="/mision" component={Mision}/>
        <Route path="*" component={Notfound}/>
    </Switch>  
)
export default Main;