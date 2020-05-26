import  React from 'react'
import { Router, Switch, Route } from 'react-router'
import Listar from '../pages/listar/Listar'
import Login from '../pages/login/Login'
import NotFound from "./NotFound"
import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const Routes = () =>(
    <Router history ={history}>
        <Switch>
            <Route component={Login} exact path="/login"></Route>            
            <PrivateRoute component={Listar} exact path="/"></PrivateRoute>
            <PrivateRoute component={NotFound} />
        </Switch>
    </Router>
)

export default Routes 