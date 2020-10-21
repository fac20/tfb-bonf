import React from 'react';
import { db } from '../../connection.js';

export default function NewLessonForm() {
  const [formData, setFormData] = React.useState({});

  const changeData = (event) => {
    setFormData({
      student: event.target.elements.student.value,
      title: event.target.elements.title.value,
      date: event.target.elements.date.value,
      time: event.target.elements.time.value,
      level: event.target.elements.level.value,
      skills: {
        reading: event.target.elements.reading.checked,
        writing: event.target.elements.writing.checked,
        listening: event.target.elements.listening.checked,
        speaking: event.target.elements.speaking.checked,
        grammar: event.target.elements.grammar.checked,
      },
      link: event.target.elements.link.value,
    });
  };
  const submitData = (event) => {
    event.preventDefault();
    changeData(event);
  };

  const isFirstRun = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.log(formData);
    //potential issue, can't allow tutors to write student's name.

    // db.collection('students')
    // .where('name', '==', `${formData.student}`)
    // .collection('lessons')
    // .doc()
    // .set({
    //   date: formData.date,
    //   time: formData.time,
    //   title: formData.title,
    //   level: formData.level,
    //   skills: formData.skills,
    //   link: formData.title,
    // });
    let ID;

    db.collection('students')
      .where('name', '==', formData.student)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data())
          ID = doc.id;
        });
      })
      .then(() => {
        db.collection('students')
          .doc(ID)
          .collection('lessons')
          .doc(`${formData.date} ${formData.time}`)
          .set({
            date: formData.date,
            time: formData.time,
            title: formData.title,
            level: formData.level,
            skills: formData.skills,
            link: formData.link,
          });
      });

    //.collection('lessons').add(formData).then(docref => console.log("written WITH ID ", docref.id)).catch(err => console.err)

    // when we have 2 people with same names, .where is going to find 2 documnets. How do we solve it?
  }, [formData]);

  return (
    <form onSubmit={submitData}>
      <label htmlFor="student">Student</label>
      <input type="text" name="student" id="student" />
      <label htmlFor="title">Lesson Title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="date">Date</label>
      <input type="date" name="date " id="date" />
      <label htmlFor="time">Time</label>
      <input type="time" name="time" id="time" />
      <label htmlFor="level">Select a level:</label>
      <select id="level" name="level">
        <option value="a1">A1</option>
        <option value="a2">A2</option>
        <option value="a2/b1">A2/B1</option>
        <option value="b1">B1</option>
        <option value="b2">B2</option>
        <option value="b2/c1">B2/C1</option>
        <option value="c1">C1</option>
        <option value="c2">C2</option>
      </select>
      <fieldset>
        <legend>Skills</legend>
        <input type="checkbox" name="reading" id="reading" />
        <label htmlFor="reading">Reading</label>
        <input type="checkbox" name="writing" id="writing" />
        <label htmlFor="writing">Writing</label>
        <input type="checkbox" name="speaking" id="speaking" />
        <label htmlFor="speaking">Speaking</label>
        <input type="checkbox" name="listening" id="listening" />
        <label htmlFor="listening">Listening</label>
        <input type="checkbox" name="grammar" id="grammar" />
        <label htmlFor="grammar">Grammar</label>
      </fieldset>
      <label htmlFor="">Document link</label>
      <input type="url" name="link" id="doc-link" />
      <input type="checkbox" id="add-resource" />
      <label htmlFor="add-resource">Add to Resources</label>
      <button type="submit"> Add New Lesson</button>
    </form>
  );
}
