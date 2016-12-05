//this file for refactoring away routes inside index.js, if needed
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from '../App';
import About from "../components/About";
import Home from "../components/Home";
import UserProfile from "../components/UserProfile"
import CatIndex from "../components/CatIndex";
import AddCatForm from "../components/AddCatForm"
import Placeholder from "../components/Placeholder"
import NotFound from "../components/NotFound"

//consider wrapping /cats/add as child component of /cats for UI overflow of form modal
const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/cats" component={CatIndex}/>
        <Route path="/cats/add" component={AddCatForm}/>
        <Route path="/chats" component={Placeholder}/>
        <Route path="/chats/:chatId" component={Placeholder}/>
        <Route path="/profile" component={UserProfile}>
          <Route path="/profile/fosterlist" component={Placeholder}/>
          <Route path="/profile/likelist" component={Placeholder}/>
          <Route path="/profile/chats" component={Placeholder}/>
          <Route path="/profile/cats" component={Placeholder}/>
        </Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
)

export default routes;
