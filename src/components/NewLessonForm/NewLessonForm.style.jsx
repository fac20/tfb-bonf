import styled from 'styled-components';

export const Form = styled.form`
  max-width: 100ch;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: rgb(255, 244, 204);
  box-shadow: 0 5px 25px hsla(0, 0%, 0%, 0.5);
  width: fit-content;
  margin: 4rem auto;
  padding: 2.3rem 3.5rem;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
`;

export const Label = styled.label`
  display: inline-block;
  margin: auto 1rem auto 0.2rem;
`;

export const Input = styled.input`
  display: inline-block;
`;

export const BlockLabel = styled.label`
  margin: 1.5rem auto 0.4rem;
  font-weight: 600;
`;

export const Fieldset = styled.fieldset`
  margin: 1.5rem auto 0.4rem;
`;

export const Legend = styled.legend`
  font-weight: 600;
`;

export const Button = styled.button`
  margin: 1.5rem auto 0.4rem;
`;
