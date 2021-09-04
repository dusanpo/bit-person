import React from "react";

import "./App.css";

import Home from "./components/Home.jsx";

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
 
import About from "./About/About.jsx";

function App(){
  return(
  <Router>
    <Switch>
    <Route exact path = "/home" component = {Home}/>
    <Route exact path = "/about/:title" component = {About}/>
    <Route exact path = "/">
    <Redirect to = "/home"/>
    </Route>
    </Switch>
  </Router>
  
  )
    
  }
  
  export default App;
