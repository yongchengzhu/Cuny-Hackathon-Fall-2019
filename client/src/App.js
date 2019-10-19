import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Redirect } from 'react-router';

import "bootstrap/dist/css/bootstrap.min.css"
import './css/sidebar.css';
import './css/App.css';




import loginPage from './pages/login-page';
import signUpPage from './pages/signup-page';
import aboutUsPage from './pages/about-us-page'
import dashboard from './pages/dashboard-page';
import groups from './pages/groups-page';
import howto from './pages/howto-page';


function App() {
  return (
    <div>

      {/* <Bargraph
        data={[{index: 0, date: 0, value: 15},
               {index: 1, date: 1, value: 45},
               {index: 2, date: 2, value: 25}]}
        width={300}
        height={200}
        top={20}
        bottom={30}
        left={30}
        right={0}
      />
      <Piechart
        data={[{index: 0, value: 40},
               {index: 1, value: 80},
              ]}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
      /> */}

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
