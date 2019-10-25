import React from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';

import Menu from '../components/Menu';
import LoginForm from '../components/Login';

function Login() {
  const history = useHistory();
  // handler validate form
  const handlerValidateForm = (email, password, setErrors) => {
    // check email null yes or no
    if(email === '') {
      setErrors(errors => ({ ...errors, email: 'Required email' }));
    } else 
    // check email at least 6 char
    if(email.length < 6 && email.length > 0) {
      setErrors(errors => ({ ...errors, email: 'Email is at least 6 characters'}));
    } else {
      setErrors(errors => ({ ...errors, email: ''}));
    }
    // check pass null yes or no
    if(password === '') {
      setErrors(errors => ({ ...errors, password: 'Required password'}));
    } else 
    // check pass at least 6 char
    if(password.length < 6 && password.length > 0) {
      setErrors(errors => ({ ...errors, password: 'Password is at least 6 characters'}));
    } else {
      setErrors(errors => ({ ...errors, password: ''}));
    }
  }

  // handler submit form send request to server
  const handlerSubmitPost = async (email, password, setErrors) => {
    try {
      const res = await axios.post('http://localhost:7000/api/user/login', {
        email, password
      });
      localStorage.setItem('authorization', res.data.token);
      // login complete go to home page
      history.push('/');
    } catch (error) {
      setErrors(errors => ({ ...errors, email: 'Email or password wrong' }));
    }
  }

  return (
    <div className="header">
      <Menu />
      <LoginForm 
        handlerValidateForm={handlerValidateForm}
        handlerSubmitPost={handlerSubmitPost}
      />
    </div>
  )
}

export default Login
