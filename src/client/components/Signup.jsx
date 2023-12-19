import React, { useState } from 'react';
import '../styles/Login.scss';

const Signup = () => {
  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        Sign Up
      </div>
      <div className='inputContainer'>
        <input
          value={newUserFirstName}
          placeholder='First Name'
          onChange={e => setNewUserFirstName(e.target.value)}
          className='inputBox'
        />
        <label className='errorLabel'>{usernameError}</label>
      </div>
      <div className='inputContainer'>
        <input
          value={newUserLastName}
          placeholder='Last Name'
          onChange={e => setNewUserLastName(e.target.value)}
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

}

export default Signup;