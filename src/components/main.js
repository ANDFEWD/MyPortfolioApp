import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage'
import Aboutme from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contacts from './contacts';

const Main =()=>(
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contacts" component={Contacts} />
    </Switch>
)

export default Main;
