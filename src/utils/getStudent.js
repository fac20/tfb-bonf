import { db } from './../connection.js';

const getStudent = (student) => {
  let studentObj = {};
  return db
    .collection('students')
    .where('name', '==', student)
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        studentObj = doc.data();
        studentObj.studentID = doc.id;
      });
    })
    .then(() => studentObj)
    .catch((err) => console.error(err));
};

export default getStudent;
