import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Redirect } from 'react-router';

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
        <Switch>
            <Route exact path="/">
              { <Redirect to = "/login" /> }   
            </Route>

            {/* Redirect to /login Page ...  */}

              <Route path="/login" component={loginPage}/>
              <Route path="/signup" component={signUpPage}/>
              <Route path="/dashboard" component={dashboard} /> 
              <Route path="/groups" component={groups}/>
              <Route path="/howto" component={howto}/>
              <Route path="/about" component={aboutUsPage}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
