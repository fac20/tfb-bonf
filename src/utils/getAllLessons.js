import { db } from './../connection.js';
// import findStudentIDByName from './findStudentIDByName';

//maybe save tutor data to a state to minimise amount of connections to database required
const getAllLessons = (name) => {
  //get tutor email address from firebase auth local storage
  //get student name - use logged in tutor email address to get student name
  //use function findstudentid to get studentID
  //get lessons from database - docID of student; students.studentID.lessons
  let lessonsArray = [];
  db.collection('students')
    .doc(name)
    .collection('lessons')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        lessonsArray.push([doc.id, doc.data()]);
      });
      console.log(lessonsArray);
      console.log(lessonsArray[0][0], lessonsArray[0][1].title);
    });
  //use lessons array to get lessons to appear on page
};

export default getAllLessons;
