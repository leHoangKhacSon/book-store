import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Signup.css';

function Signup({ handlerValidateForm, handlerSubmitPost }) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const [ errors, setErrors ] = useState({
    email: '',
    password: '',
    password2: ''
  })
  //handler submit 
  const handlerSubmit = e => {
    e.preventDefault();
    handlerValidateForm(email, password, password2, setErrors);
    handlerSubmitPost(email, password, setErrors);
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
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <p className="error-message">{errors.email}</p>
      <div className="login-form-value">
        <img src="/password.png" alt="" />
        <input 
          type="password" 
          name="password" 
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <p className="error-message">{errors.password}</p>
      <div className="login-form-value">
        <img src="/password.png" alt="" />
        <input 
          type="password" 
          name="re-password" 
          placeholder="Re-enter Password"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
        />
      </div>
      <p className="error-message">{errors.password2}</p>
      <input 
        type="submit" 
        value="Sign up" 
        className="login-form-button"
      />
      <div className="login-form-footer">
        You already have account ?
        <Link to="/login/" className="sign-up-button">
          Login
        </Link>
      </div>
    </form>
  )
}



export default Signup
