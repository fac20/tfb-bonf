import { db } from './../connection.js';

const getLessons = (studentData) => {
  let lessons = [];
  return db
    .collection('students')
    .doc(studentData.studentID)
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

export default getLessons;
