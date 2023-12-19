import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onLoginClick = () => {
    setUsernameError('');
    setPasswordError('');

    if ('' === username) {
      setUsernameError('Please enter a valid username');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a valid password');
      return;
    }
  };

  const onSignupClick = () => {
    // take user to Signup.jsx
  }

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        Login
      </div>
      <div className='inputContainer'>
        <input
          value={username}
          placeholder='Enter your username'
          onChange={e => setUsername(e.target.value)}
          className='inputBox'
        />
        <label className='errorLabel'>{usernameError}</label>
      </div>
      <div className='inputContainer'>
        <input
          value={password}
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}
          className='inputBox'
        />
        <label className='errorLabel'>{passwordError}</label>
      </div>
      <div className='inputContainer'>
        <input
          className='inputButton'
          type='button'
          onClick={onLoginClick}
          value='Login'
        />
      </div>
      <div className='footerContainer'>
        <div className='footerText'>
          Forgot password
        </div>
        <input
          className='inputButton'
          type='button'
          onClick={onSignupClick}
          value='Signup'
        />
      </div>
    </div>
  );
};

export default Login;