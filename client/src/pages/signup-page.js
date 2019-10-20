import React, { Component } from 'react';
import axios from 'axios';

import '../css/sign-up.css';

import logo from '../css/images/Logo.png';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', cpassword: '', mobile: '', milesPerGallon: 0 }
  }

  render() {
    return (
      <div className="row no-gutter ">
        <div className="wrapper">
          <div className="col">
            <div className="login d-flex align-items-center py-5">
              <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">

                <img className="sign-Up-Logo align-items-center text-Label" src={logo} width="250px" height="250px" alt="Climater Logo"/>

                  <h3 className="login-heading mb-4 align-items-center text-Label">Create an account!</h3>
                  <form id="signupform">
                    <label htmlFor="inputName" className="text-center" >Full Name</label>
                    <div className="form-label-group">
                      <input name="username" type="username" id="inputUsername" className="form-control" required autoFocus/>
                    </div>

                    <label htmlFor="inputEmail"> Email address</label>
                    <div className="form-label-group">
                      <input name="email" type="email" id="inputEmail" className="form-control" required autoFocus/>
                    </div>

                    <label htmlFor="inputPassword">Password</label>
                    <div className="form-label-group">
                      <input name="password" type="password" id="inputPassword" className="form-control" required/>
                    </div>

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="form-label-group">
                      <input type="password" id="ConfirmPassword" className="form-control" required/>
                    </div>

                    <label htmlFor="inputPhoneNumber">Phone number</label>
                    <div className="form-label-group">
                      <input name="mobile" type="Number" id="inputMobile" className="form-control" required/>
                    </div>

                    <label htmlFor="inputPhoneNumber">Fuel Economy</label>
                    <div className="form-label-group">
                      <input name="milesPerGallon" type="Number" id="inputFuelEconomy" className="form-control" required/>
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                      onClick = {e => this.onSubmit(e)}
                    >
                      Register
                    </button>
                    <a className="d-block text-center mt-3 medium" href="/">Already have an account?</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="d-none d-md-flex col-md-6 col-lg-6 col-sm-0">
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
    this.props.signup(this.state);
  }
}
