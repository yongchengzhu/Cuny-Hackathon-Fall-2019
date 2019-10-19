import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './css/sidebar.css';
import './css/App.css';



import loginPage from './pages/login-page';
import signUpPage from './pages/signup-page';
import dashboard from './pages/dashboard-page';
import groups from './pages/groups-page';
import howto from './pages/howto-page';
import aboutUsPage from './pages/about-us-page';

function App() {
  return (
    <div>

      <Router>
          <Route path="/login" exact component={loginPage}/>
          <Route path="/signup" exact component={signUpPage}/>
          <Route path="/dashboard" exact component={dashboard} /> 
          <Route path="/groups" exact component={groups}/>
          <Route path="/howto" exact component={howto}/>
          <Route path="/about" exact component={aboutUsPage}/>

      </Router>
    </div>
  );
}

export default App;
