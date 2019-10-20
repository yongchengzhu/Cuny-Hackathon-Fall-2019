import React, { Component } from 'react';
import axios from 'axios';

import "../css/login.css";
import logo from '../css/images/Logo.png';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  render() {
    return (
      <div className="row no-gutter">
      <div className="col-md-8 col-lg-6">
        <div className="login d-flex align-items-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
                <img id="login-Logo" src={logo} width="250px" height="250px" alt="Climater Logo"/>

                <h3 className="login-heading mb-4 text-Label">Welcome back!</h3>
                {this.props.err}
                <form id="loginform">
                  <label htmlFor="inputEmail">Email</label>
                  <div className="form-label-group">
                    <input onChange={this.handleChange} type="text" id="inputUsername" className="form-control" name="email" required autoFocus/>
                  </div>
                  <label htmlFor="inputPassword">Password</label>
                  <div className="form-label-group">
                    <input onChange={this.handleChange} type="password" id="inputPassword" className="form-control" name="password" required/> 
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                    type="submit"
                    onClick = {this.handleSubmit}
                  >
                    Sign in
                  </button>


                  <div className="text-center">
                    <a className="d-block text-center mt-3 medium" href="/signup">Don't have an account?</a>
                  </div>

                  <div className="text-center">
                    <a className="d-block text-center mt-3 medium" href="/about">About us</a>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-md-flex col-md-6 col-lg-6">
        <section>

        </section>
      </div>

    </div>
    )
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signin(this.state);
  }
}
