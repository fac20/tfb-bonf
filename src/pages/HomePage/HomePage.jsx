import React from 'react';
// import findTutorWithEmail from './../../utils/findTutorWithEmail';
import { db } from '../../connection.js';
import Table from './../../components/Table/Table';
import NewLessonForm from '../../components/NewLessonForm/NewLessonForm';
import { Button, LessonsWrapper, H2 } from './HomePage.style.jsx';

export default function HomePage({
  tutorData,
  upcominglessonsArray,
  setupcomingLessonsArray,
  newLesson,
  setNewLesson,
}) {
  const [teamMembers, setTeamMembers] = React.useState([]);
  const [studentData, setStudentData] = React.useState({});

  const thisFunction = () => {
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
      });
    // .catch((err) => console.error('no lessons yet'));
  };

  // React.useEffect(() => {
  //   thisFunction().then((data) => {
  //     let upcomingArray = [];
  //     let mydate = new Date();
  //     let curr_date = mydate.getDate();
  //     let curr_month = mydate.getMonth() + 1;
  //     let curr_year = mydate.getFullYear();
  //     let today = curr_year + '-' + curr_month + '-' + curr_date;
  //     console.log(today);
  //     for (let i = 0; i < data.length; i++) {
  //       if (data[i].date >= today) {
  //         upcomingArray.push(data[i]);
  //       }
  //     }
  //     setupcomingLessonsArray(upcomingArray);
  //   });
  // }, []);

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

  React.useEffect(() => {
    let tutorsArray = [];
    let studentObj = {};
    if (tutorData) {
      db.doc(tutorData.student.path)
        .get()
        .then((doc) => {
          studentObj = doc.data();
          doc.data().tutors.forEach((tutor) => {
            db.doc(tutor.path)
              .get()
              .then((data) => {
                tutorsArray.push(data.data());
              });
          });
        });
      setTeamMembers(tutorsArray);
      setStudentData(studentObj);
    }
  }, [tutorData]);

  // React.useEffect(() => {
  //   console.log('teamMembers', teamMembers);
  // }, [teamMembers]);

  return (
    <main>
      <h1>Home Page</h1>
      <H2>Tutee's Lessons</H2>
      <LessonsWrapper>
        <h3>Upcoming</h3>
        {upcominglessonsArray ? (
          <Table columns={tableHeaders} data={upcominglessonsArray} />
        ) : (
          <></>
        )}
        <Button type="button" onClick={() => setNewLesson(!newLesson)}>
          Add New Lesson
        </Button>
        {newLesson ? <NewLessonForm setNewLesson={setNewLesson} /> : <></>}
      </LessonsWrapper>
    </main>
  );
}
