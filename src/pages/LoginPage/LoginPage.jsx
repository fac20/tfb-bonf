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
                  srcset={`${logo150} 150w, ${logo300} 300w, ${logo768} 768w, ${logo1024} 1024w, ${logo256} 256w, ${logoOriginal} 1034w`}
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
          <Label htmlFor="email">E-mail</Label>
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
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
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
  box-shadow: 0 5px 25px hsla(0, 0%, 0%, 0.5);
  background: hsl(115, 55%, 68%);
`;

const Title = styled.h1`
  margin-bottom: 45px;
  line-height: 1em;
  padding-left: 10px;
  border-left: 5px solid hsl(208, 99%, 69%);
  font-size: 40px;
`;
const Label = styled.label`
  position: absolute;
  top: 1px;
  left: 1px;
  padding: 10px;
  display: inline-block;
  transition: 0.5s;
  pointer-events: none;
`;
const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #111;
  background: hsl(140, 100%, 100%);
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
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
  position: relative;
  width: 300px;
  height: 46px;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: hsl(208, 99%, 69%);
  color: hsl(140, 100%, 100%);
  border: none;
  box-shadow: 5px 5px 5px hsla(0, 0%, 0%, 0.5);
  max-width: 120px;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  font-size: 25px;
  font-weight: 900;
  &:hover {
    background: #e91563;
  }
`;

const Subtitle = styled.p`
  padding: 0px 20px 20px 20px;
`;
