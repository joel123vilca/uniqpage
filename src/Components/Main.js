import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Careers from './Careers';
import Culture from './Culture';
import Investigation from './Investigation';
import Admission from './Admission';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/carreras" component={Careers} />
        <Route  path="/inicio" component={LandingPage} />
        <Route  path="/interculturalidad" component={Culture} />
        <Route  path="/investigacion" component={Investigation} />
        <Route  path="/admision" component={Admission} />
    </Switch>
)
export default Main;