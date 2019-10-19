import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bargraph from './components/bargraph.js';
import Piechart from './components/piechart';
import './css/App.css';
import './css/sidebar.css';
import aboutUsPage from './pages/about-us-page';
import dashboard from './pages/dashboard-page';
import groups from './pages/groups-page';
import howto from './pages/howto-page';
import loginPage from './pages/login-page';
import signUpPage from './pages/signup-page';

function App() {
  return (
    <div>
      <Bargraph
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
      />
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
