import styled from 'styled-components';

export const LessonsWrapper = styled.div`
  text-align: center;
  border-radius: 20px;
  background-color: hsl(172, 87%, 91%);
  box-shadow: 0 5px 25px hsla(0, 0%, 0%, 0.5);
  width: fit-content;
  margin: auto;
  padding: 1rem 2rem;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
`;

export const H2 = styled.h2`
  /* text-align: center; */
`;

export const Button = styled.button`
  /* margin: 15px 10px 10px 0; */
  background-color: #63b6fe;
  border-radius: 0.5rem;
  border: none;
  color: white;
  display: inline-block;
  font-weight: 900;
  margin: 1rem;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: hsl(207.9, 98.7%, 50%);
    cursor: pointer;
  }
`;
