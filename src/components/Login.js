import React, { useState } from 'react'
import {
  BrowserRouter as 
  Link
} from "react-router-dom";
import axios from 'axios';

import './Login.css';

function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState({
    email: '',
    password: ''
  })

  const handlerSubmit = (e) => {
    e.preventDefault();
    // check email null yes or no
    if(email === '') {
      setError(error => ({ ...error, email: 'Required email' }));
    } else 
    // check email at least 6 char
    if(email.length < 6 && email.length > 0) {
      setError(error => ({ ...error, email: 'Email is at least 6 characters'}));
    } else {
      setError(error => ({ ...error, email: ''}));
    }
    // check pass null yes or no
    if(password === '') {
      setError(error => ({ ...error, password: 'Required password'}));
    } else 
    // check pass at least 6 char
    if(password.length < 6 && password.length > 0) {
      setError(error => ({ ...error, password: 'Password is at least 6 characters'}));
    } else {
      setError(error => ({ ...error, password: ''}));
    }
    
    // if(error.email !== '' && error.password !== '') {
    //   return;
    // }

    const postData = async () => {
      try {
        const res = await axios.post('http://localhost:7000/api/user/login', {
          email, password
        });
        localStorage.setItem('authorization', res.data.token);
      } catch (error) {
        console.log(error);
      }
    }
    postData();
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
      <p className="error-message">{error.email}</p>
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
      <p className="error-message">{error.password}</p>
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
