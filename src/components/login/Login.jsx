import React from 'react';
import LargeLogo from './../../assets/images/Opportutoring_Logo.png';

const LoginPage = () => {
  //TODO
  //small logo - decide if including
  //big logo - add srcset for responsiveness, include animation from original webpage
  //login form - style, make accessible, action
  //little blurb to register - add link

  return (
    <>
      <img
        src={LargeLogo}
        alt="Opportutoring logo of a globe surrounded by a blue circle"
      />
      <form>
        <h3>Log in</h3>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Log in</button>
        <p>
          New to the platform? <a>Apply to be a tutor here.</a>
        </p>
      </form>
    </>
  );
};

export default LoginPage;
