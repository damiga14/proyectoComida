import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/pages/Home/Home.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}