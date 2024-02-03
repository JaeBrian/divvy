import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { setLoginInfo } from '../state/userSlice';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLogout } from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import '../styles.css';

const clientId =
  '716839651700-flg46f5pn332pmluje3e3i692m795he7.apps.googleusercontent.com';

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

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  });

  // var accessToken = gapi.auth.getToken().access_token;

  const onSuccess = (res) => {
    console.log('success', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('failed', res);
  };

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
    <div className="mainContainer">
      <form className="loginForm" onSubmit={handleSubmit(onLoginClick)}>
        <h1 className="titleContainer">Divvy</h1>
        <div className="inputContainer">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            {...register('username')}
            onChange={(e) => setUsername(e.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{usernameError}</label>
        </div>
        <div className="inputContainer">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            {...register('password')}
            onChange={(e) => setPassword(e.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <div className="forgotPassword">
          <span class="footerText">Forgot password?</span>
        </div>
        <div className="inputContainer">
          <Button
            text="Login"
            type="submit"
            className="border border-white px-3 py-2"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            text="Sign Up"
            onClick={onSignupClick}
            type="submit"
            className="border border-white w-full px-3 py-2"
          />
        </div>
      </form>
      {/* <div id="signInButton">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
      <div id="signoutButton">
        <GoogleLogout
          clientId={clientId}
          buttonText={'Logout'}
          onLogoutSuccess={onSuccess}
        />
      </div> */}
    </div>
  );
};

export default Login;
