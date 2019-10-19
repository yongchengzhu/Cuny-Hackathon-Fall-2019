import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './css/sidebar.css';
import './css/App.css';


import SideBar from './components/sidebar-component';



import loginPage from './pages/login-page';
import signUpPage from './pages/signup-page';
import aboutUsPage from './pages/about-us-page';




function App() {
  return (
    <div>
      
      <SideBar />

      <Router>
          <Route path="/login" exact component={loginPage}/>
          <Route path="/signup" exact component={signUpPage}/>
          <Route path="/dashboard" exact component={aboutUsPage}/>
          {/* <Route path="/groups" exact component={}/> */}
          {/* <Route path="/howto" exact component={}/> */}
      </Router>
    </div>
  );
}

export default App;
