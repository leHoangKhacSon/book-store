import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Menu from '../components/Menu';
import SignupForm from '../components/Signup';

function Signup() {
  const history = useHistory();
  // handler validate form
  const handlerValidateForm = (email, password, password2, setError) => {
    if(email === '') {
      setError(errors => ({ ...errors, email: 'Required email' }));
    } else 
    // check email at least 6 char
    if(email.length < 6 && email.length > 0) {
      setError(errors => ({ ...errors, email: 'Email is at least 6 characters'}));
    } else {
      setError(errors => ({ ...errors, email: ''}));
    }
    // check pass null yes or no
    if(password === '') {
      setError(errors => ({ ...errors, password: 'Required password'}));
    } else 
    // check pass at least 6 char
    if(password.length < 6 && password.length > 0) {
      setError(errors => ({ ...errors, password: 'Password is at least 6 characters'}));
    } else {
      setError(errors => ({ ...errors, password: ''}));
    }
    // check pass match pass2 yes or no
    if(password2 !== password) {
      setError(errors => ({ ...errors, password2: 'Password not match'}));
    } else {
      setError(errors => ({ ...errors, password: ''}));
    }
  }
  // handler post request
  const handlerSubmitPost = async (email, password, setError) => {
    try {
      const res = await axios.post('http://localhost:7000/api/user/register', {
        email, password
      });
      console.log(res.data);
      localStorage.setItem('authorization', res.data.token);
      // register complete go to home page
      history.push('/');
    } catch (error) {
      setError(errors => ({ ...errors, email: 'Email existed'}));
    }
  }

  return (
    <div className="header">
      <Menu />
      <SignupForm 
        handlerValidateForm={handlerValidateForm} 
        handlerSubmitPost={handlerSubmitPost}
      />
    </div>
  )
}

export default Signup
