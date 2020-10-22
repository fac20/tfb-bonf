// import React from 'react';
import { db } from './../connection.js';

//function which takes in email addres of person logged in

// then uses email address to find them in tutors collection
// go within doc to find name of student and return object with student and team members

const findTutorWithEmail = (emailaddress) => {
  db.collection('tutors')
    .where('email', '==', emailaddress)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data(), doc.data().student);
        return doc.data();
      });
    })
    .then((data) => data)
    .catch(function (error) {
      console.log('Error getting document:', error);
    });
};

export default findTutorWithEmail;
