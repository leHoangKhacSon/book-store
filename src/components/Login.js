import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Login.css';

function Login() {
  return (
    <form action="" className="login-form">
      <p className="login-form-title">
        Books ReactJS
      </p>
      <div className="login-form-value">
          <img src="/user.png" alt="" />
          <input 
            type="text" 
            name="email" 
            placeholder="Email" 
          />
      </div>
      <div className="login-form-value">
        <img src="/password.png" alt="" />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
        />
      </div>
      
      <p className="remember-pass">
        <span>Remember Password</span>
        <span>Quen mat khau</span>
      </p>

      <input 
        type="submit" 
        value="Login" 
        className="login-form-button" 
      />

      <div className="login-form-footer">
        Don't have account ?
        <Link to="/signup/" className="sign-up-button">
          Sign up
        </Link>
      </div>
    </form>
  )
}

export default Login
