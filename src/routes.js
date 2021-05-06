import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingLogin from './components/LandingLogin/LandingLogin';
import Home from './components/Home/Home';
import Instructors from './components/Instructors/Instructors';
import Classes from './components/Classes/Classes';
import Contact from './components/Contact/Contact'
import UserProfile from './components/UserProfile/UserProfile'

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LandingLogin}/>
        <Route exact path="/logout" component={LandingLogin}/>
        <Route exact path="/instructors" component={Instructors}/>
        <Route exact path="/classes" component={Classes}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/users" component={UserProfile}/>

       
    </Switch>
)