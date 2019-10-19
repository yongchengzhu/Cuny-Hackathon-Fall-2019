import React, { Component } from 'react';
import axios from 'axios';

import '../css/sign-up.css';

import logo from '../css/images/Logo.png';



export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const myForm = document.getElementById("signupform");
    let formData = new FormData(myForm);

    let user = {};
    for (let key of formData.keys()){
      user[key] = formData.get(key);
    }

    console.log(user);

    axios.post('http://localhost:5000/user/signup', user)
    .then(res => {
      if(res.status >= 400){
        console.log(res.data);
      } else {
        localStorage.setItem("token", res.data.token);
        window.location = '/dashboard';
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row no-gutter ">
           
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container-fluid">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
              
              <img className="sign-Up-Logo align-items-center text-Label" src={logo} width="250px" height="250px" alt="Climater Logo"/>
                
                <h3 className="login-heading mb-4 align-items-center text-Label">Create an account!</h3>
                <form id="signupform">
<<<<<<< Updated upstream
                    <label htmlFor="inputName" className="text-center" >User Name</label>
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

                    <label htmlFor="inputFuelEconomy">Fuel Economy</label>
                    <div className="form-label-group">
                        <input name="milespergallon" type="number" id="inputFuelEconomy" className="form-control" required/> 
                    </div>

                    <label htmlFor="inputPhoneNumber">Phone number</label>
                    <div className="form-label-group">
                        <input name="cellnumber" type="phoneNumber" id="inputPhoneNumber" className="form-control" required/> 
                    </div>

                    <button 
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-3 mt-4" 
                        type="submit"
                        onClick = {e => this.onSubmit(e)}
                    >
                        Register
                    </button>
                    <a className="d-block text-center mt-3 medium" href="/login">Already have an account?</a>
=======
                  <label htmlFor="inputName" className="text-center" >User Name</label>
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
>>>>>>> Stashed changes
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-md-flex col-md-4 col-lg-6 ">
        <section>
        </section>
      </div>
      
  </div>
            )
  }
}
