import React from 'react';
// import findTutorWithEmail from './../../utils/findTutorWithEmail';
import { db } from '../../connection.js';
import Table from './../../components/Table/Table';
import NewLessonForm from '../../components/NewLessonForm/NewLessonForm';
import { Button, LessonsWrapper, H2 } from './HomePage.style.jsx';

export default function HomePage({
  tutorData,
  upcomingLessonsArray,
  setUpcomingLessonsArray,
  newLesson,
  setNewLesson,
}) {
  const [teamMembers, setTeamMembers] = React.useState([]);
  const [studentData, setStudentData] = React.useState({});

  const getLessons = () => {
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
        return lessons.map((lesson) => {
          let skillsString = '';
          if (lesson.skills.reading) skillsString = 'Reading ';
          if (lesson.skills.writing) skillsString += 'Writing ';
          if (lesson.skills.listening) skillsString += 'Listening ';
          if (lesson.skills.speaking) skillsString += 'Speaking ';
          if (lesson.skills.grammar) skillsString += 'Grammar ';
          return Object.assign(
            Object.fromEntries([['skillsString', skillsString]]),
            lesson
          );
        });
      })
      .catch((err) => console.error(err, 'no lessons yet'));
  };

  React.useEffect(() => {
    getLessons().then((data) => {
      let upcomingArray = [];
      let myDate = new Date();
      let curDate = myDate.getDate();
      let curMonth = myDate.getMonth() + 1;
      let curYear = myDate.getFullYear();
      let today = curYear + '-' + curMonth + '-' + curDate;
      for (let i = 0; i < data.length; i++) {
        if (data[i].date >= today) {
          upcomingArray.push(data[i]);
        }
      }
      setUpcomingLessonsArray(upcomingArray);
    });
  }, [setUpcomingLessonsArray]);

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

  const getTutor = (name) => {
    return db
      .collection('tutors')
      .where('name', '==', name)
      .get()
      .then((snap) => snap.forEach((tutor) => tutor.data()))
      .catch((err) => {
        console.error(err);
      });
  };

  //TODO: Get effect to return/update tutorsArray state after promises fulfil
  React.useEffect(() => {
    let tutorsArr = [];
    let studentObj;
    if (tutorData) {
      db.collection('students')
        .where('name', '==', tutorData.student_name)
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            studentObj = doc.data();
            setStudentData(studentObj);
            studentObj.tutors.forEach((tutor) => {
              tutorsArr.push(getTutor(tutor));
            });
            setTeamMembers(tutorsArr);
          });
        })
        .catch((err) => console.error(err));
    }
  }, [tutorData]);

  // logs to stop ESLint warning
  // TODO: Delete these logs
  React.useEffect(() => {
    console.log('teamMembers:', teamMembers, 'studentData:', studentData);
  }, [teamMembers, studentData]);

  return (
    <main>
      <h1>Home Page</h1>
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
        {newLesson ? (
          <NewLessonForm tutorData={tutorData} setNewLesson={setNewLesson} />
        ) : (
          <></>
        )}
      </LessonsWrapper>
    </main>
  );
}
// onClick=somefunction OR onClick=(e)=> somefunction(e)
