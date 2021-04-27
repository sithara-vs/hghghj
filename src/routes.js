import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingLogin from './components/LandingLogin';
import Home from './components/Home';
import Instructors from './components/Instructors';
import Classes from './components/Classes';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LandingLogin}/>
        <Route exact path="/instructors" component={Instructors}/>
        <Route exact path="/classes" component={Classes}/>
       
    </Switch>
)