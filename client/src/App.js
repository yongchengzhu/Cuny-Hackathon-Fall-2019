import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Redirect } from 'react-router';
import { Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import './css/sidebar.css';
import aboutUsPage from './pages/about-us-page';
import dashboard from './pages/dashboard-page';
import groups from './pages/groups-page';
import howto from './pages/howto-page';
import LoginPage from './pages/login-page';
import SignUpPage from './pages/signup-page';
import SignOutPage from './pages/signout-page';
import history from './history';

import server from './apis/server';
import Axios from "axios";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {err: ''}
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
              <Route exact path="/">
                { <Redirect to = "/login" /> }
              </Route>
              <Route path="/login" render={props => <LoginPage {...props} signin={this.signin} err={this.state.err} />}/>
              <Route path="/signup" render={props => <SignUpPage {...props} signup={this.signup} />}/>
              <Route path="/dashboard" component={dashboard} />
              <Route path="/groups" component={groups}/>
              <Route path="/howto" component={howto}/>
              <Route path="/about" component={aboutUsPage}/>
              <Route path="/signout" render={props => <SignOutPage {...props} signout={this.signout} /> }/>
          </Switch>
        </Router>
      </div>
    );
  }

  // -----------------------------------------------------------------------------
  // API Calls
  // -----------------------------------------------------------------------------
  signup = async form => {
    const res = await server.post('/users/signup', form);

    localStorage.setItem('token', res.data.token);
    history.push('/dashboard');
  }

  signin = async form => {
    try {
      const res = await server.post('/users/signin', form);
      localStorage.setItem('token', res.data.token);
      history.push('/dashboard');
    } catch (e) {
      if(!localStorage.getItem('token')) this.setState({ err: 'Invalid Credentials' });
    }

  }

  signout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }
}

export default App;
