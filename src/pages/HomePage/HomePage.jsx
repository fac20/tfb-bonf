import React from 'react';
import { db } from '../../connection.js';
import Table from './../../components/Table/Table';
import NewLessonForm from '../../components/NewLessonForm/NewLessonForm';
import {
  Button,
  H2,
  LessonsWrapper,
  TutorTeamWrapper,
  TutorArticle,
} from './HomePage.style.jsx';

export default function HomePage({
  newLesson,
  setNewLesson,
  setUpcomingLessonsArray,
  tutorData,
  upcomingLessonsArray,
}) {
  const [teamMembers, setTeamMembers] = React.useState([]);
  const [studentData, setStudentData] = React.useState({});

  const getLessons = () => {
    let lessons = [];
    return db
      .collection('students')
      .doc('e8EPetXKPE0oekiWLeRF')
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
  }, [setUpcomingLessonsArray, tutorData]);

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
        accessor: 'tutor',
      },
    ],
    []
  );

  const getTutors = (student) => {
    let tutorsArr = [];
    return db
      .collection('tutors')
      .where('student_name', '==', student)
      .get()
      .then((snap) =>
        snap.forEach((tutor) => {
          tutorsArr.push(tutor.data());
        })
      )
      .then(() => tutorsArr)
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    let studentObj;
    if (tutorData) {
      db.collection('students')
        .where('name', '==', tutorData.student_name)
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            studentObj = doc.data();
            setStudentData(studentObj);
          });
        })
        .catch((err) => console.error(err));
      getTutors(tutorData.student_name).then((team) => setTeamMembers(team));
    }
  }, [tutorData]);

  // logs to stop ESLint warning
  // TODO: Delete these logs
  React.useEffect(() => {
    console.log('studentData:', studentData);
  }, [studentData]);
  // React.useEffect(() => {
  //   console.log('teamMembers 1:', teamMembers);
  // }, [teamMembers]);

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
      <H2>Team Members</H2>
      <TutorTeamWrapper>
        {teamMembers[0] ? (
          teamMembers.map((tutor, i) => (
            <TutorArticle key={i}>
              <p>{tutor.name}</p>
            </TutorArticle>
          ))
        ) : (
          <></>
        )}
      </TutorTeamWrapper>
    </main>
  );
}
