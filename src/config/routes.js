//this file for refactoring away routes inside index.js, if needed
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import App from '../App';

import About from "../components/About";
import Home from "../components/Home";
import NotFound from "../components/NotFound"
import WrongUser from "../components/WrongUser"
import LogInPage from "../components/LogInPage"

import IndexContainer from "../containers/IndexContainer";
import ChatroomContainer from "../containers/ChatroomContainer";
import ProfileContainer from "../containers/ProfileContainer";
import ChatRoom from "../components/ChatRoom"

import AddCatForm from "../components/AddCatForm"
import EditCatForm from "../components/EditCatForm"
import CatDisplay from "../components/CatDisplay"

import Placeholder from "../components/Placeholder"


//consider wrapping /cats/add as child component of /cats for UI overflow of form modal
const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cats" component={IndexContainer}>
          <Route path="/cats/add" component={AddCatForm}/>
          <Route path="/cats/:id/edit" component={EditCatForm}/>
        </Route>
        <Route path="/chats" component={ChatroomContainer} >
          <Route path="/chats/:chatId" component={ChatRoom}/>
        </Route>
        <Route path="/profile" component={ProfileContainer}>
          <Route path="/profile/likelist" component={Placeholder}/>
          <Route path="/profile/cats" component={CatDisplay}>
            <Route path="/profile/cats/add" component={AddCatForm}/>
            <Route path="/profile/cats/:id/edit" component={EditCatForm}/>
          </Route>
        </Route>
        <Route path="/login" component={LogInPage} />
        <Route path="/wronguser" component={WrongUser} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
)

export default routes;
