import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './css/navbar.css';
import './css/App.css';


import loginPage from './pages/login-page';
import signUpPage from './pages/signup-page';




function Navbar() {
  return(
    <div>
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#home">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}



function App() {
  return (
    <Router>
        <Route path="/login" exact component={loginPage}/>
        <Route path="/signup" exact component={signUpPage}/>
        {/* <Route path="/dashboard" exact component={}/> */}
        {/* <Route path="/groups" exact component={}/> */}
        {/* <Route path="/howto" exact component={}/> */}
    </Router>
  );
}

export default App;
