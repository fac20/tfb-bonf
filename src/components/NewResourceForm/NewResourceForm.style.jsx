import styled from 'styled-components';

export const Form = styled.form`
  background-color: rgb(255, 244, 204);
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
  margin: auto;
  max-width: 40ch;
  padding: 1rem 2rem;
  position: fixed;
  width: fit-content;
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
  background-color: #63b6fe;
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-weight: 800;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #63b6fe;
  display: inline;
  font-size: 3em;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
