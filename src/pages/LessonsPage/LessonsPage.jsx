import React from 'react';
import styled from 'styled-components';
import { db } from './../../connection';

const LessonsPage = () => {
  //need useState because re-rendering of component will make variable declaration empty
  // const [lessonsArray, setLessonsArray] = React.useState([])
  const thisfunction = () => {
    let lessonsArray = [];
    return db
      .collection('students')
      .doc('sam')
      .collection('lessons')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data())
          lessonsArray.push([doc.id, doc.data()]);
        });
        return lessonsArray;
      });
  };

  React.useEffect(() => {
    thisfunction().then((data) => {
      console.log(data);
    });
  }, []);

  console.log(Date());

  //use react-table to create table dynamically?
  //must split array somehow (using date) into upcoming and past

  return (
    <>
      <h2>Tutee's Lessons</h2>
      <LessonsWrapper>
        <h3>Upcoming</h3>
        <table border="1px 1px solid">
          <thead>
            <tr>
              <th>#</th>
              <th>Date/Time</th>
              <th>Title/Topic</th>
              <th>Level</th>
              <th>Skills</th>
              <th>Tutor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4</td>
              <td>17/10/2020 14:30</td>
              <td>Phrasal Verbs and Prepositions</td>
              <td>A1</td>
              <td>Grammar</td>
              <td>Alex</td>
            </tr>
          </tbody>
        </table>
        <button type="button">Add New Lesson</button>
        <button type="button">Add Homework</button>
        <h3>Past</h3>
        <table border="1px 1px solid">
          <thead>
            <tr>
              <th>#</th>
              <th>Date/Time</th>
              <th>Title/Topic</th>
              <th>Level</th>
              <th>Skills</th>
              <th>Tutor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>17/10/2020 14:30</td>
              <td>Phrasal Verbs and Prepositions</td>
              <td>A1</td>
              <td>Grammar</td>
              <td>Alex</td>
            </tr>
            <tr>
              <td>2</td>
              <td>17/10/2020 14:30</td>
              <td>Phrasal Verbs and Prepositions</td>
              <td>A1</td>
              <td>Grammar</td>
              <td>Alex</td>
            </tr>
            <tr>
              <td>3</td>
              <td>17/10/2020 14:30</td>
              <td>Phrasal Verbs and Prepositions</td>
              <td>A1</td>
              <td>Grammar</td>
              <td>Alex</td>
            </tr>
          </tbody>
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
