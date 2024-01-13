import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { setLoginInfo } from '../state/userSlice';
import { useDispatch } from 'react-redux';
import '../styles.css';

const Signup = () => {
  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // enter button functionality
  const onSignupClick = async (e) => {
    // e.preventDefault();

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
      navigate('/selectplan');
      dispatch(
        setLoginInfo({
          username: username,
          password: password,
          loggedIn: true,
        })
      );

      // need to store newUser variable in redux
    } catch (e) {
      // need to handle error
      console.log(e);
    }
  };

  return (
    <div className="mainContainer">
      <form className="loginForm" onSubmit={handleSubmit(onSignupClick)}>
        <h1 className="titleContainer">Sign Up</h1>
        <div className="nameInputs">
          <div className="inputContainer">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              {...register('firstName')}
              onChange={(e) => setNewUserFirstName(e.target.value)}
              className="inputBox"
            />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              {...register('lastName')}
              onChange={(e) => setNewUserLastName(e.target.value)}
              className="inputBox"
            />
          </div>
        </div>
        <div className="userInputs">
          <div className="newUserInputContainer">
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register('username')}
              onChange={(e) => setNewUsername(e.target.value)}
              className="newUserInputBox"
            />
          </div>
          <div className="newUserInputContainer">
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register('email')}
              onChange={(e) => setNewEmail(e.target.value)}
              className="newUserInputBox"
            />
          </div>
          <div className="newUserInputContainer">
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register('password')}
              onChange={(e) => setNewPassword(e.target.value)}
              className="newUserInputBox"
            />
          </div>
          <div className="inputContainer">
            <Button text="Sign Up" type="submit" className="inputButton" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
