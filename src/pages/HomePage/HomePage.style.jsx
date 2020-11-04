import styled from 'styled-components';

export const LessonsWrapper = styled.div`
  background-color: hsl(172, 87%, 91%);
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
  margin: auto;
  padding: 1rem 2rem;
  width: fit-content;
`;

export const TutorTeamWrapper = styled(LessonsWrapper)`
  background-color: #fff4cc;
  padding: 1.5rem, 1rem, 1rem;
`;

export const StudentWrapper = styled(TutorTeamWrapper)`
  background-color: #ffe8e8;
`;

export const TutorArticle = styled.article`
  border-radius: 20px;
  border: 1px solid black;
  margin: 0 auto 1rem;
  padding: 0 1.5rem;
  width: fit-content;
  background-color: hsl(172, 87%, 91%);
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const H2 = styled.h2`
  text-align: center;
`;

export const H3 = styled.h3`
  text-align: left;
  margin: 0;
  padding: 0;
`;

export const BackButton = styled.button`
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: 2px 2px 0 black;
  font-size: 2em;
  font-weight: 900;
  height: 1.5em;
  width: 1.5em;
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
  background-color: #d6fcf7;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: start;
`;

export const TitleBox = styled(LevelBox)`
  background-color: hsl(43.29113924050633, 100%, 53.529411764705884%);
  font-size: 0.8rem;
  font-weight: 900;
  margin: auto;
  padding: 0.5rem 1rem;
  width: fit-content;
`;

export const LinkButton = styled.div`
  text-align: center;
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

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
