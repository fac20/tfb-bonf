import React from 'react';
import { db } from './../../connection';
import Table from './../../components/Table/Table';
import styled from 'styled-components';

const LessonsPage = () => {
  //need useState because re-rendering of component will make variable declaration empty
  const [lessonsArray, setLessonsArray] = React.useState('');

  const thisfunction = () => {
    let lessons = [];
    return db
      .collection('students')
      .doc('sam')
      .collection('lessons')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          lessons.push(doc.data()); //lessons is an array, with each doc being an object
        });
        return lessons.map((elem) => {
          let skillsString = '';
          if (elem.skills.reading) skillsString = 'Reading ';
          if (elem.skills.writing) skillsString += 'Writing ';
          if (elem.skills.listening) skillsString += 'Listening ';
          if (elem.skills.speaking) skillsString += 'Speaking ';
          if (elem.skills.grammar) skillsString += 'Grammar ';
          // console.log(Object.fromEntries([['skillsString', skillsString]]))
          // console.log(elem)
          return Object.assign(
            Object.fromEntries([['skillsString', skillsString]]),
            elem
          );
        });
      });
    // .catch((err) => console.error('no lessons yet'));
  };

  React.useEffect(() => {
    thisfunction().then((data) => {
      setLessonsArray(data);
      console.log(Date());
    });
  }, []);

  const tableHeaders = React.useMemo(
    () => [
      //add numbering?
      {
        Header: 'Date', //title of column
        accessor: 'date', //this refers to key in data
      },
      {
        Header: 'Time',
        accessor: 'time',
      },
      {
        Header: 'Title',
        accessor: 'title', //click title for link to document
      },
      {
        Header: 'Level',
        accessor: 'level',
      },
      {
        Header: 'Skills',
        accessor: 'skillsString', //add IELTS/TOEFL related
      },
      {
        Header: 'Link',
        accessor: 'link',
      },
      {
        Header: 'Tutor',
      },
    ],
    []
  );

  //must split array somehow (using date) into upcoming and past

  return (
    <main>
      <H2>Tutee's Lessons</H2>
      <LessonsWrapper>
        <h3>Upcoming</h3>
        {lessonsArray ? (
          <Table columns={tableHeaders} data={lessonsArray} />
        ) : (
          <></>
        )}
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/new-lesson-form';
          }}
        >
          Add New Lesson
        </Button>
        <Button type="button">Add Homework</Button>
        <h3>Past</h3>
      </LessonsWrapper>
    </main>
  );
};

export default LessonsPage;

const LessonsWrapper = styled.div`
  border-radius: 20px;
  background-color: hsl(172, 87%, 91%);
  box-shadow: 0 5px 25px hsla(0, 0%, 0%, 0.5);
  width: fit-content;
  margin: auto;
  padding: 2.3rem 3.5rem;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  margin: 15px 10px 10px 0;
`;
