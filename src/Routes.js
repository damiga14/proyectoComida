import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/pages/Home/Home.js'
import Recetas from './components/pages/Recetas/Recetas.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/recetas' component={Recetas}></Route>
            </Switch>
        </BrowserRouter>
    )
}