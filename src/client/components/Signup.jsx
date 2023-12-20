import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { setLoginInfo } from '../state/userSlice';
import { useDispatch } from 'react-redux';
import '../styles/Login.scss';

const Signup = () => {
  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // enter button functionality
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: newUserFirstName,
          lastName: newUserLastName,
          username: newUsername,
          email: newEmail,
          password: newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Sign up failed');
      }

      const newUser = await response.json();
      console.log('💖💗💓💘💝💞💕newUser', newUser);

      // need to store newUser variable in redux
    } catch (e) {
      // need to handle error
      console.log(e);
    }
  };

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>Sign Up</div>
      <div className='nameInputs'>
        <div className='inputContainer'>
          <input
            value={newUserFirstName}
            placeholder='First Name'
            onChange={(e) => setNewUserFirstName(e.target.value)}
            className='inputBox'
          />
        </div>
        <div className='inputContainer'>
          <input
            value={newUserLastName}
            placeholder='Last Name'
            onChange={(e) => setNewUserLastName(e.target.value)}
            className='inputBox'
          />
        </div>
      </div>
      <div className='userInputs'>
        <div className='newUserInputContainer'>
          <input
            value={newUsername}
            placeholder='Username'
            onChange={(e) => setNewUsername(e.target.value)}
            className='newUserInputBox'
          />
        </div>
        <div className='newUserInputContainer'>
          <input
            value={newEmail}
            placeholder='Email'
            onChange={(e) => setNewEmail(e.target.value)}
            className='newUserInputBox'
          />
        </div>
        <div className='newUserInputContainer'>
          <input
            type='password'
            value={newPassword}
            placeholder='Password'
            onChange={(e) => setNewPassword(e.target.value)}
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
};

export default Signup;
