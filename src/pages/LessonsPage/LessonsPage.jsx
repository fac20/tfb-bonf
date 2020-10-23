import React from 'react';
import styled from 'styled-components';

const LessonsPage = () => {
  return (
    <>
      <h2>Tutee's Lessons</h2>
      <LessonsWrapper>
        <h3>Upcoming</h3>
        <table border="1px 1px solid">
          <tr>
            <th>#</th>
            <th>Date/Time</th>
            <th>Title/Topic</th>
            <th>Skills</th>
            <th>Tutor</th>
          </tr>
          <tr>
            <td>4</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
        </table>
        <button type="button">Add New Lesson</button>
        <button type="button">Add Homework</button>
        <h3>Past</h3>
        <table border="1px 1px solid">
          <tr>
            <th>#</th>
            <th>Date/Time</th>
            <th>Title/Topic</th>
            <th>Skills</th>
            <th>Tutor</th>
          </tr>
          <tr>
            <td>1</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
          <tr>
            <td>2</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
          <tr>
            <td>3</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
        </table>
      </LessonsWrapper>
    </>
  );
};

export default LessonsPage;

const LessonsWrapper = styled.div`
  border-radius: 20px;
  background-color: hsl(172, 87%, 91%);
  box-shadow: 0 5px 25px hsla(0, 0%, 0%, 0.5);
  width: fit-content;
`;
