import React, { useState } from 'react';
import {
  logo150,
  logo256,
  logo300,
  logo768,
  logo1024,
  logoOriginal,
} from '../../assets/images';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import './login.css';
import logIn from '../../utils/logIn.js';

const LoginPage = () => {
  //TODO:
  //small logo - decide if including [A say no]
  //login form - style, make accessible, action
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <main>
      <section>
        <GreenSquare>
          <Fade left>
            <WhiteSquare>
              <figure>
                <img
                  src={logo768}
                  alt="Opportutoring logo of a globe surrounded by a blue circle"
                  loading="lazy"
                  srcset={`${logo150} 150w, ${logo300} 300w, ${logo768} 768w, ${logo1024} 1024w, ${logo256} 256w, ${logoOriginal} 1034w`}
                  sizes="(max-width: 100%) 100vw, 300px"
                />
              </figure>
            </WhiteSquare>
          </Fade>
        </GreenSquare>
      </section>

      <LoginForm
        onSubmit={(event) => {
          event.preventDefault();
          logIn(email, password);
        }}
      >
        <Title>Log in</Title>
        <InputBox>
          <FormInput
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Label htmlFor="email">E-mail</Label>
        </InputBox>
        <InputBox>
          <FormInput
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <Label htmlFor="password">Password</Label>
        </InputBox>
        <InputBox>
          <SubmitButton type="submit">Log in</SubmitButton>
        </InputBox>
        <Subtitle>
          New to the platform?{' '}
          <a href="https://opportutoring.com/">Apply to be a tutor here.</a>
        </Subtitle>
      </LoginForm>
    </main>
  );
};

export default LoginPage;

const GreenSquare = styled.div`
  background-color: hsl(115, 55%, 68%);
  height: min-content;
`;
const WhiteSquare = styled.div`
  background-color: #fff;
  height: fit-content;
  width: fit-content;
  -webkit-box-shadow: 8px 0px 43px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 0px 43px -22px rgba(0, 0, 0, 0.75);
  box-shadow: 8px 0px 43px -22px rgba(0, 0, 0, 0.75);
  position: relative;
  left: 10%;
  top: 25px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 5px 25px hsl(208, 99%, 69%);
  background: hsl(115, 55%, 68%);
`;

const Title = styled.h1`
  margin-bottom: 45px;
  line-height: 1em;
  padding-left: 10px;
  border-left: 5px solid hsl(208, 99%, 69%);
  font-weight: bold;
`;
const Label = styled.label`
  font-weight: 300;
  position: absolute;
  top: 1px;
  left: 1px;
  padding: 10px;
  display: inline-block;
  font-size: 16px;
  color: #111;
  transition: 0.5s;
  pointer-events: none;
`;
const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #111;
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  color: #111;
  font-weight: 300;
  &:focus ~ ${Label} {
    transform: translateX(-10px) translateY(-32px);
    font-size: 12px;
  }
  &:valid ~ ${Label} {
    transform: translateX(-10px) translateY(-32px);
    font-size: 12px;
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 300px;
  height: 46px;
  margin-bottom: 35px;
`;

const SubmitButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: hsl(208, 99%, 69%);
  color: #fff;
  border: none;
  max-width: 120px;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 800;
  &:hover {
    background: #e91563;
  }
`;

const Subtitle = styled.p`
  padding-left: 15px;
  padding-right: 15px;
`;
