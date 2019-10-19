import React, { Component } from 'react';
import axios from 'axios';

// import "../login.css"
// import logo from "../img/expirio.PNG"  // <----- I need to import a logo here later ... 

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();

    const myForm = document.getElementById("loginform");
    let formData = new FormData(myForm);
    let user = {};
    for (let key of formData.keys()){
      user[key] = formData.get(key);
    }


    axios.post('http://localhost:5000/user/', user)
      .then(res => {
        if(res.status >= 400){
          console.log(res.data);
        } else {
          localStorage.setItem("token", res.data.token);
          console.log(localStorage.getItem("token"));

          window.location = '/dashboard';
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div> 
                <h3>Welcome back!</h3>
                <form>
                    <label htmlFor="inputEmail">User Name</label>
                    <div>
                        <input type="text" id="inputUsername" className="form-control" name="username" required autoFocus/>
                    </div>
                    <label htmlFor="inputPassword">Password</label>
                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" name="password" required/> 
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    
                    <button 
                    className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" 
                    type="submit"
                    onClick = {e => this.onSubmit(e)}
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
                    

    )
  }
}