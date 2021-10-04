import React from "react";
import './Styles/main.scss';
import './Styles/anime.scss'
import MainHome from './Home/MainHome';
import MainFeature from "./Features/MainFeature";
import MainWorks from "./Works/MainWorks";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainHome} exact />
        <Route path='/features' component={MainFeature} />
        <Route path='/how-it-work' component={MainWorks} />
        <Route path='/log-in' component={LogIn} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
