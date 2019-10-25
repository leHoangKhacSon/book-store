import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './Login.css';

function Login({ handlerValidateForm, handlerSubmitPost }) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errors, setErrors ] = useState({
    email: '',
    password: ''
  })

  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerValidateForm(email, password, setErrors);
    handlerSubmitPost(email, password, setErrors);
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
      <p className="error-message">{errors.email}</p>
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
      <p className="error-message">{errors.password}</p>
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

Login.propTypes = {
  handlerValidateForm: PropTypes.func,
  handlerSubmitPost: PropTypes.func
}

export default Login
