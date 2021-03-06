import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './main';
import Admin from './admin';
import WhoamI from './whoami';
import Skills from './skills';
import Blog from './main/blog';
import Contact from './contact';
import Dashboard from './dashboard';
import PrivateRoute from './PrivateRoute';
import SinglePage from './main/blog/SinglePage';

import history from "../utils/history";
import * as routes from "../constants/routes";

const Router = () => (
    <BrowserRouter history = {history}>
        <Switch>
            <Route exact path ={routes.HOME} component= {Main}/>
            <Route exact path ={routes.BLOG} component= {Blog}/>
            <Route exact path ={routes.ADMIN} component= {Admin}/>
            <Route exact path ={routes.SKILLS} component= {Skills}/>
            <Route exact path ={routes.WHOAMI} component={WhoamI}/>
            <Route exact path ={routes.CONTACT} component= {Contact}/>
            <PrivateRoute exact path={routes.DASHBOARD} component={Dashboard} />
            <Route exact path = {routes.SINGLEPAGE} component={SinglePage} />
            
            {/* <Route exact path ={routes.DASHBOARD} component={Dashboard} /> */}
        </Switch>
    </BrowserRouter>
)

export default Router;