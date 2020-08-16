import React from 'react';
import { Router as BrowserRouter, Switch, Route} from 'react-router-dom';

// import MainRouter from './main';
// import FourOhfour from '../components/fourOhFour';

import Main from "./main";
import Favourites from "../components/favourites";
import history from "../utils/history";

import * as routes from "../constants/routes"

const Router = () => (
    <BrowserRouter history = {history}>
        <Switch>
            <Route path={routes.HOME} component={Main} /> 
            <Route path={routes.FAVOURITES} component={Favourites} />
            {/* <Route path="*" component={FourOhfour} /> */}
        </Switch>
    </BrowserRouter>
)

export default Router;