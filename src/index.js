import React from 'react'
import {render} from 'react-dom'
import App from './App.js'
import {Provider} from "react-redux";
import Store from "./stateManagment/Store";
import {BrowserRouter, Route} from "react-router-dom";
import Routes from "./components/Routes";

render(
    <Provider store={Store}>
    <BrowserRouter >
        {
            Routes.map((route)=>(
                <Route {...route}/>
            ))
        }
    </BrowserRouter>
</Provider>,document.getElementById("root"));