import React from 'react';
import { db } from '../../connection.js';
import Table from './../../components/Table/Table';
import NewLessonForm from '../../components/NewLessonForm/NewLessonForm';
import {
  Button,
  H1,
  H2,
  H3,
  LessonsWrapper,
  FlexRow,
  StudentWrapper,
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

  const getStudent = (student) => {
    let studentObj = {};
    return db
      .collection('students')
      .where('name', '==', student)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          studentObj = doc.data();
        });
      })
      .then(() => studentObj)
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    if (tutorData.student_name) {
      getStudent(tutorData.student_name).then((student) =>
        setStudentData(student)
      );
      getTutors(tutorData.student_name).then((team) => setTeamMembers(team));
    }
  }, [tutorData]);

  return (
    <main>
      <H1>Home Page</H1>

      <H2>Tutee's Lessons</H2>
      <LessonsWrapper>
        <H3>Upcoming</H3>
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

      <FlexRow>
        <div>
          <H2>Student</H2>
          <StudentWrapper>
            {studentData ? (
              <>
                <H3>{studentData.name}</H3>
                <p>email: {studentData.email}</p>
                <p>phone: {studentData.phone}</p>
              </>
            ) : (
              <></>
            )}
          </StudentWrapper>
        </div>
        <div>
          <H2>Team Members</H2>
          <TutorTeamWrapper>
            {teamMembers[0] ? (
              teamMembers.map((tutor, i) => (
                <>
                  <H3>{tutor.name}</H3>
                  <TutorArticle key={i}>
                    <p>email: {tutor.email}</p>
                    <p>phone: {tutor.phone}</p>
                  </TutorArticle>
                </>
              ))
            ) : (
              <></>
            )}
          </TutorTeamWrapper>
        </div>
      </FlexRow>
    </main>
  );
}
