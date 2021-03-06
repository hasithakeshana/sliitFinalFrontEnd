import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import MainPage from './components/MainPage';
import NavBar from './components/NavBar';

import Grid from './graphs/Grid';
import BookView from './components/BookView';

import BookNow from './components/BookCourse';
import Login from './components/Login';
import Register from './components/Register';



class App extends Component {
  render() {
    return (
     <div>
    <Router>
    <NavBar></NavBar>
     <Switch>
          
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/booknow" component={BookNow}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/grid" component={Grid}/>
          <Route exact path="/bookView" component={BookView}/>

            
          
        </Switch>
     
    </Router>
   
       </div>
      
    );
  }
}

export default App;
