import React, { useState } from 'react';
import Button from '../common/Button';
import '../styles/Login.scss';

const Signup = () => {
  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleClick = () => {
    // enter button functionality
  }

  return (
    <div className='mainContainer'>
        <div className='titleContainer'>
          Sign Up
        </div>
        <div className='nameInputs'>
          <div className='inputContainer'>
            <input
              value={newUserFirstName}
              placeholder='First Name'
              onChange={e => setNewUserFirstName(e.target.value)}
              className='inputBox'
            />
          </div>
          <div className='inputContainer'>
            <input
              value={newUserLastName}
              placeholder='Last Name'
              onChange={e => setNewUserLastName(e.target.value)}
              className='inputBox'
            />
          </div>
        </div>
        <div className='userInputs'>
          <div className='newUserInputContainer'>
            <input
              value={newUsername}
              placeholder='Username'
              onChange={e => setNewUsername(e.target.value)}
              className='newUserInputBox'
            />
          </div>
          <div className='newUserInputContainer'>
            <input
              value={newEmail}
              placeholder='Email'
              onChange={e => setNewEmail(e.target.value)}
              className='newUserInputBox'
            />
          </div>
          <div className='newUserInputContainer'>
            <input
              value={newPassword}
              placeholder='Password'
              onChange={e => setNewPassword(e.target.value)}
              className='newUserInputBox'
            />
          </div>
          <div className='inputContainer'>
            <Button
            text='Sign Up'
            onClick={handleClick}
            type='submit'
            className='inputButton'
            />
          </div>
        </div>
    </div>
  );
}

export default Signup;