import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from "react-router";
import './css/index.css';
import routes from "./config/routes"
import App from './App'; //if routes stop working, use app component for testings

render( routes, document.getElementById('root'))
