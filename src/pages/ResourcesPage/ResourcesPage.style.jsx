import styled from 'styled-components';

export const H1 = styled.h1`
  color: #63b6fe;
`;

export const LevelBox = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
`;

export const SkillsBox = styled(LevelBox)`
  background-color: hsl(47.058823529411775, 100%, 90%);
  width: fit-content;
`;

export const TitleBox = styled(LevelBox)`
  background-color: hsl(43.29113924050633, 100%, 53.529411764705884%);
  font-size: 0.8rem;
  font-weight: 900;
  margin: auto;
  padding: 0.5rem 1rem;
  width: fit-content;
`;

export const LinkButton = styled.button`
  background-color: #e9e7fc;
  border-radius: 0.8rem;
  border: 2px solid black;
  box-shadow: 4px 4px 0 black;
  margin: 1rem;
  padding: 1rem;
  width: 14rem;
`;

export const LevelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
