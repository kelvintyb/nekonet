//this file for refactoring away routes inside index.js, if needed
import React from 'react';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from "react-router";
import App from '../App';
import MessagePane from "../components/MessagePane"
import About from "../components/About";
import Home from "../components/Home";
import NotFound from "../components/NotFound"
import WrongUser from "../components/WrongUser"
import LogInPage from "../components/LogInPage"

import IndexContainer from "../containers/IndexContainer";
import ChatroomContainer from "../containers/ChatroomContainer";
import ProfileContainer from "../containers/ProfileContainer";

import AddCatForm from "../components/AddCatForm"
import EditCatForm from "../components/EditCatForm"
import CatDisplay from "../components/CatDisplay"
import LikeDisplay from "../components/LikeDisplay"
import FosterDisplay from "../components/FosterDisplay"

import Placeholder from "../components/Placeholder"


//consider wrapping /cats/add as child component of /cats for UI overflow of form modal
const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cats" component={IndexContainer}/>
        <Route path="/chats" component={ChatroomContainer}>
          <Route path="/chats/:id" component={MessagePane}/>
        </Route>
        <Route path="/profile" component={ProfileContainer}>
          <Route path="/profile/likelist" component={LikeDisplay}/>
          <Route path="/profile/cats" component={FosterDisplay}/>
        </Route>
        <Route path="/login" component={LogInPage} />
        <Route path="/wronguser" component={WrongUser} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
)

export default routes;
