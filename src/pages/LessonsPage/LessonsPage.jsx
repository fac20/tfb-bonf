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
          lessons.push(doc.data());
        });
        return lessons;
      })
      .catch((err) => console.err('no lessons ye'));
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
      // {
      //   Header: 'Skills',
      //   accessor: 'skills',
      // },
      {
        Header: 'Link',
        accessor: 'link',
      },
    ],
    []
  );

  //must split array somehow (using date) into upcoming and past

  return (
    <main>
      {lessonsArray ? (
        <Table columns={tableHeaders} data={lessonsArray} />
      ) : (
        <></>
      )}
      <h2>Tutee's Lessons</h2>
      <LessonsWrapper>
        <h3>Upcoming</h3>

        <button type="button">Add New Lesson</button>
        <button type="button">Add Homework</button>
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
`;
