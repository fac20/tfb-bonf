import React from 'react';
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
import logIn from '../../utils/logIn.js';

const LoginPage = () => {
  //TODO:
  //small logo - decide if including [A say no]
  //login form - style, make accessible, action
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Main>
      <Section>
        <GreenSquare>
          <Fade left>
            <WhiteSquare>
              <figure>
                <img
                  src={logo768}
                  alt="Opportutoring logo of a globe surrounded by a blue circle"
                  loading="lazy"
                  srcSet={`${logo150} 150w, ${logo300} 300w, ${logo768} 768w, ${logo1024} 1024w, ${logo256} 256w, ${logoOriginal} 1034w`}
                  sizes="(max-width: 100%) 100vw, 300px"
                />
              </figure>
            </WhiteSquare>
          </Fade>
        </GreenSquare>
      </Section>

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
            placeholder=" "
          />
          <Label htmlFor="email">Email</Label>
        </InputBox>
        <InputBox>
          <FormInput
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder=" "
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
    </Main>
  );
};

export default LoginPage;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  justify-content: center;
  max-width: 100%;
`;

const Section = styled.section`
  margin-right: 75px;
  margin-bottom: 20px;
`;
const GreenSquare = styled.div`
  background-color: hsl(115, 55%, 68%);
  height: min-content;
`;
const WhiteSquare = styled.div`
  -moz-box-shadow: 8px 0px 43px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 0px 43px -22px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  box-shadow: 8px 0px 43px -22px rgba(0, 0, 0, 0.75);
  height: fit-content;
  left: 10%;
  position: relative;
  top: 25px;
  width: fit-content;
`;

const LoginForm = styled.form`
  align-items: center;
  background: hsl(115, 55%, 68%);
  border-radius: 20px;
  box-shadow: 0 5px 25px hsla(0, 0%, 0%, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  border-left: 5px solid hsl(208, 99%, 69%);
  font-size: 40px;
  line-height: 1em;
  margin-bottom: 45px;
  padding-left: 10px;
`;
const Label = styled.label`
  display: inline-block;
  left: 1px;
  padding: 10px;
  pointer-events: none;
  position: absolute;
  top: 1px;
  transition: 0.5s;
`;
const FormInput = styled.input`
  background: hsl(140, 100%, 100%);
  border-radius: 4px;
  border: 2px solid #111;
  box-sizing: border-box;
  font-size: 16px;
  left: 0;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 100%;
  &:focus ~ ${Label} {
    transform: translateX(-10px) translateY(-32px);
    font-size: 12px;
  }
  &:valid ~ ${Label} {
    transform: translateX(-10px) translateY(-32px);
    font-size: 12px;
  }
  &:not(:placeholder-shown) ~ ${Label} {
    transform: translateX(-10px) translateY(-32px);
    font-size: 12px;
  }
`;

const InputBox = styled.div`
  display: flex;
  height: 46px;
  justify-content: center;
  margin-bottom: 35px;
  position: relative;
  width: 300px;
`;

const SubmitButton = styled.button`
  background-color: hsl(208, 99%, 69%);
  border-radius: 4px;
  border: none;
  box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.5);
  color: hsl(140, 100%, 100%);
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 900;
  max-width: 120px;
  padding: 10px;
  &:hover {
    background: #e91563;
  }
`;

const Subtitle = styled.p`
  padding: 0px 20px 20px 20px;
`;
