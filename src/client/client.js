//Startup point for the client side application
//putting functionality back to the rendered app is called hydration
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from "./Routes"
import "babel-polyfill"
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from 'redux'
import {renderRoutes} from "react-router-config"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import axios from "axios"
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: "/api"
});
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
          <div>
                { renderRoutes(Routes)}
          </div>
        </BrowserRouter>
   </Provider>
    , document.querySelector("#root"));//browser router hardcoded to see url