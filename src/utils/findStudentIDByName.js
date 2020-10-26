import { db } from './../connection';

const findStudentIDByName = (studentName) => {
  let ID;
  db.collection('students') //we serach the students collection for a field name to match studentName
    .where('name', '==', studentName)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        ID = doc.id; //then we assign the id of the document we selected which indicates the student to the variable ID
      });
      return ID;
    });
};

export default findStudentIDByName;
