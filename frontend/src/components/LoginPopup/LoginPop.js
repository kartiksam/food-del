import React, { useContext, useEffect, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import { API_URL } from '../../config';

const LoginPop = ({ setShowLogin }) => {
  const { token, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState('Login');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = API_URL;
    if (currState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      // ... error handling ...
    }
  };
  // whenevr data change this will print on console
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className="login" id="login">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img alt="" onClick={() => setShowLogin(false)} src={assets.cross_icon}></img>
        </div>
        <div className="login-popup-inputs">
          {currState === 'Login' ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              placeholder="Your Name"
              required
              type="text"
              value={data.name}
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            placeholder="Your Email"
            required
            type="email"
            value={data.email}
          />
          <input
            name="password"
            onChange={onChangeHandler}
            placeholder="Password"
            required
            type="password"
            value={data.password}
          />
        </div>
        <button type="submit">{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input required type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          // we can apply on click on anything like img text and others or <Link to=route> on anything we click go to that route
          <p>
            Already have an account?
            <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
