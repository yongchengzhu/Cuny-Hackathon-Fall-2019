import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Redirect } from 'react-router';
import { Router, Route, Switch } from "react-router-dom";
import './css/App.css';
import './css/sidebar.css';
import aboutUsPage from './pages/about-us-page';
import Dashboard from './pages/dashboard-page';
import groups from './pages/groups-page';
import howto from './pages/howto-page';
import LoginPage from './pages/login-page';
import SignUpPage from './pages/signup-page';
import SignOutPage from './pages/signout-page';
import history from './history';
import server from './apis/server';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {err: '', user: {}}
  }

  componentDidMount() {
    this.fetchUser();
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
              <Route path="/dashboard" render={props => <Dashboard {...props} createCarbon={this.createCarbon} user={this.state.user} />} />
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

  createCarbon = async form => {
    const res = await server.post('/users/carbonLog/create', form);
    console.log(res);
  }

  fetchUser = async () => {
    const res = await server.get('/users/');

    this.setState({ user: res.data });
  }
}

export default App;
