import React from 'react'
import { Link } from 'react-router-dom';

import './Signup.css';

function Signup() {
  return (
    <form action="" class="login-form">
      <p class="login-form-title">
        Books ReactJS
      </p>
      <div class="login-form-value">
        <img src="/user.png" alt="" />
        <input 
          type="text" 
          name="email" 
          placeholder="Email" 
        />
      </div>
      <div class="login-form-value">
        <img src="/password.png" alt="" />
        <input 
          type="password" 
          name="password" 
          placeholder="Password"
        />
      </div>
      <div class="login-form-value">
        <img src="/password.png" alt="" />
        <input 
          type="password" 
          name="re-password" 
          placeholder="Re-enter Password"
        />
      </div>
      <input 
        type="submit" 
        value="Sign up" 
        class="login-form-button"
      />
      <div class="login-form-footer">
        You already have account ?
        <Link to="/login/" className="sign-up-button">
          Login
        </Link>
      </div>
    </form>
  )
}

export default Signup
