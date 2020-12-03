import React from 'react';
import Table from './../../components/Table/Table';
import NewLessonForm from '../../components/NewLessonForm/NewLessonForm';
import getLessons from '../../utils/getLessons.js';
import getStudent from '../../utils/getStudent.js';
import getTutors from '../../utils/getTutors.js';
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
import { db } from '../../connection.js';

export default function HomePage({
  newLesson,
  setNewLesson,
  setUpcomingLessonsArray,
  tutorData,
  upcomingLessonsArray,
}) {
  const [teamMembers, setTeamMembers] = React.useState([]);
  const [studentData, setStudentData] = React.useState({});

  React.useEffect(() => {
    console.log('db', db);
    if (studentData.studentID) {
      getLessons(studentData).then((data) => {
        let upcomingArray = [];
        let myDate = new Date();
        let firstDate = myDate.getDate();
        let curDate;
        firstDate < 10 ? (curDate = '0' + firstDate) : (curDate = firstDate);
        let firstMonth = myDate.getMonth() + 1;
        let curMonth;
        firstMonth < 10
          ? (curMonth = '0' + firstMonth)
          : (curMonth = firstMonth);
        let curYear = myDate.getFullYear();
        let today = curYear + '-' + curMonth + '-' + curDate;
        for (let i = 0; i < data.length; i++) {
          if (data[i].date >= today) {
            upcomingArray.push(data[i]);
          }
        }
        setUpcomingLessonsArray(upcomingArray);
      });
    }
  }, [setUpcomingLessonsArray, tutorData, studentData]);

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
                <p>Email: {studentData.email}</p>
                <p>Phone: {studentData.phone}</p>
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
                    <p>Email: {tutor.email}</p>
                    <p>Phone: {tutor.phone}</p>
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
