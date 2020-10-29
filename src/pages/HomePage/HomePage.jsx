import React from 'react';
import findTutorWithEmail from './../../utils/findTutorWithEmail';
import styled from 'styled-components';
import { db } from '../../connection.js';

export default function HomePage({ tutorData }) {
  // // console.log("homepagelog", findTutorWithEmail.resolve('hello@me.com'))
  // findTutorWithEmail('hello@me.com').then((data) => {
  //   console.log('homepagethen', data); //works
  // });
  const getTeamMembersFromTutorData = (tutor) => {
    return db
      .doc(tutorData.student.path)
      .get()
      .then((doc) => {
        let tutorsArray = [];
        for (let i = 0; i < doc.data().tutors.length; i++) {
          //db.doc('tutors/mH1W1jQXS0FXZ4W5ov4f')
          db.doc(doc.data().tutors[i].path)
            .get()
            .then((data) => tutorsArray.push(data.data()));
        }
        return tutorsArray;
      });
  };

  React.useEffect(() => {
    if (tutorData) {
      db.doc(tutorData.student.path)
        .get()
        .then((doc) =>
          // console.log(doc.data(), doc.data().tutors[0], doc.data().tutors[0].id)
          console.log('itworks??', doc.data())
        );
    }
    //to get student name
    console.log(tutorData.student_name);
    //to get student UID
    if (tutorData.student) console.log(tutorData.student.path);
    if (tutorData)
      getTeamMembersFromTutorData(tutorData).then((data) => console.log(data));
  }, [tutorData]);
  //global tutorData state - contains tutor stuff
  //use student ref to get student info for team members and student name and info

  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}

const TeamMember = styled.div``;
