import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { setLoginInfo } from '../state/userSlice';
import { useDispatch } from 'react-redux';
import '../styles/Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginClick = async (data) => {
    //auth if user exists in db
    try {
      if ('' === username) {
        setUsernameError('Please enter a valid username');
        return;
      }

      if ('' === password) {
        setPasswordError('Please enter a valid password');
        return;
      }

      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        setUsernameError('Invalid username or password');
        return;
      }

      const loggedInUser = await response.json();
      console.log('loggedInUser', loggedInUser);
      dispatch(
        setLoginInfo({
          username: loggedInUser.username,
          password: loggedInUser.password,
          loggedIn: true,
        })
      );

      setUsernameError('');
      setPasswordError('');

      navigate('/subdash');
    } catch (e) {
      console.log(e);
    }
  };

  const onSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className='mainContainer'>
      <form className='loginForm' onSubmit={handleSubmit(onLoginClick)}>
        <h1 className='titleContainer'>Divvy</h1>
        <div className='inputContainer'>
          <input
            type='text'
            name='username'
            placeholder='Enter your username'
            {...register('username')}
            onChange={(e) => setUsername(e.target.value)}
            className='inputBox'
          />
          <label className='errorLabel'>{usernameError}</label>
        </div>
        <div className='inputContainer'>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            {...register('password')}
            onChange={(e) => setPassword(e.target.value)}
            className='inputBox'
          />
          <label className='errorLabel'>{passwordError}</label>
        </div>
        <div className='inputContainer'>
          <Button text='Login' type='submit' className='inputButton' />
        </div>
      </form>
      <div className='footerContainer'>
        <div className='footerText'>Forgot password</div>
        <Button
          text='Sign Up'
          onClick={onSignupClick}
          type='submit'
          className='inputButton'
        />
      </div>
    </div>
  );
};

export default Login;
