import { db } from './../connection.js';

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

export default getTutors;
