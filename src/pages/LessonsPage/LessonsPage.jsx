import React from 'react';
import { useHistory } from 'react-router-dom';
import { db } from './../../connection';
import styled from 'styled-components';
import Table from './../../components/Table/Table';
import NewLessonForm from '../../components/NewLessonForm/NewLessonForm';

const LessonsPage = ({
  tutorData,
  upcomingLessonsArray,
  setUpcomingLessonsArray,
  pastLessonsArray,
  setPastLessonsArray,
  newLesson,
  setNewLesson,
}) => {
  //need useState because re-rendering of component will make variable declaration empty
  // const [upcomingLessonsArray, setUpcomingLessonsArray] = React.useState('');
  // const [pastLessonsArray, setPastLessonsArray] = React.useState('');
  // const [newLesson, setNewLesson] = React.useState(false);

  const history = useHistory();

  const thisFunction = () => {
    let lessons = [];
    return db
      .collection('students')
      .doc(tutorData.student.id)
      .collection('lessons')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          lessons.push(doc.data()); //lessons is an array, with each doc being an object
        });
        return lessons.map((lesson) => {
          let skillsString = '';
          if (lesson.skills.reading) skillsString = 'Reading ';
          if (lesson.skills.writing) skillsString += 'Writing ';
          if (lesson.skills.listening) skillsString += 'Listening ';
          if (lesson.skills.speaking) skillsString += 'Speaking ';
          if (lesson.skills.grammar) skillsString += 'Grammar ';
          // console.log(Object.fromEntries([['skillsString', skillsString]]))
          // console.log(lesson)
          return Object.assign(
            Object.fromEntries([['skillsString', skillsString]]),
            lesson
          );
        });
      });
    // .catch((err) => console.error('no lessons yet'));
  };

  React.useEffect(() => {
    if (tutorData) {
      thisFunction().then((data) => {
        let upcomingArray = [];
        let pastArray = [];
        let myDate = new Date();
        let curr_date = myDate.getDate();
        let curr_month = myDate.getMonth() + 1;
        let curr_year = myDate.getFullYear();
        let today = curr_year + '-' + curr_month + '-' + curr_date;
        for (let i = 0; i < data.length; i++) {
          if (data[i].date >= today) {
            upcomingArray.push(data[i]);
          } else {
            pastArray.push(data[i]);
          }
        }
        console.log(upcomingArray);
        setUpcomingLessonsArray(upcomingArray);
        setPastLessonsArray(pastArray);
      });
    }
  }, [newLesson, setPastLessonsArray, setUpcomingLessonsArray, tutorData]);

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

  return (
    <main>
      <H2>Tutee's Lessons</H2>
      <LessonsWrapper>
        <h3>Upcoming</h3>
        {upcomingLessonsArray ? (
          <Table columns={tableHeaders} data={upcomingLessonsArray} />
        ) : (
          <></>
        )}
        <Button type="button" onClick={() => setNewLesson(!newLesson)}>
          Add New Lesson
        </Button>
        <Button
          type="button"
          onClick={() => {
            history.push('/resources');
          }}
        >
          Use existing resource for a new lesson
        </Button>
        <h3>Past</h3>
        {pastLessonsArray ? (
          <Table columns={tableHeaders} data={pastLessonsArray} />
        ) : (
          <></>
        )}
        {newLesson ? (
          <NewLessonForm tutorData={tutorData} setNewLesson={setNewLesson} />
        ) : (
          <></>
        )}
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
