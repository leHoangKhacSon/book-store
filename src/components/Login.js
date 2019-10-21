import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

import './Login.css';

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(email === '') {
      console.log('required email');
      return;
    }
    if(password === '') {
      console.log('required password');
      return;
    }
    const postData = async () => {
      try {
        const res = await axios.post('http://localhost:7000/api/user/login', {
          email, password
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    postData();
    console.log('login success');
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handlerSubmit} className="login-form">
      <p className="login-form-title">
        Books ReactJS
      </p>
      <div className="login-form-value">
          <img src="/user.png" alt="" />
          <input 
            type="text" 
            name="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
      </div>
      <div className="login-form-value">
        <img src="/password.png" alt="" />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
