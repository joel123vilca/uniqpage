import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Careeres from './Careers';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/carreras" component={Careeres} />
        <Route  path="/interculturalidad" component={Culture} />
        <Route  path="/projects" component={Projects} />
        <Route  path="/resume" component={Resume} />
    </Switch>
)
export default Main;