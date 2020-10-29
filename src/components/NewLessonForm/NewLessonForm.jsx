import React from 'react';
import { db } from '../../connection.js';
import styled from 'styled-components';

export default function NewLessonForm() {
  const [formData, setFormData] = React.useState({});
  const [addToResource, setAddToResource] = React.useState(false);
  const [resourceChecked, setResourceChecked] = React.useState(false);

  const changeData = (event) => {
    setFormData({
      tutor: '', //get value from tutorData state
      student: event.target.elements.student.value, //need to change to get value from tutorData
      title: event.target.elements.title.value,
      date: event.target.elements.date.value,
      time: event.target.elements.time.value,
      level: event.target.elements.level.value.toUpperCase(),
      skills: {
        reading: event.target.elements.reading.checked,
        writing: event.target.elements.writing.checked,
        listening: event.target.elements.listening.checked,
        speaking: event.target.elements.speaking.checked,
        grammar: event.target.elements.grammar.checked,
      },
      link: event.target.elements.link.value,
    });
    if (event.target.elements.addresource.checked) setAddToResource(true);
    if (!event.target.elements.addresource.checked) setAddToResource(false);
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
    // when we have 2 people with same names, .where is going to find 2 documnets. How do we solve it?

    let ID;
    //have function to pull user from local storage auth. Match tutor user to student. Get student "ID".
    //stringent requirements for users to

    //given tutor username, find the student they are associated with

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
        db.collection('students').doc(ID).collection('lessons').doc().set({
          date: formData.date,
          time: formData.time,
          title: formData.title,
          level: formData.level.toUpperCase(),
          skills: formData.skills,
          link: formData.link,
          // need to save tutor as well in the lessons collection
        });
      });
    if (addToResource) {
      db.collection('resources').doc().set({
        title: formData.title,
        level: formData.level.toUpperCase(),
        skills: formData.skills,
        link: formData.link,
      });
    }
  }, [formData, addToResource]); //would this make it submit twice?

  return (
    <Form onSubmit={submitData}>
      <BlockLabel htmlFor="student">Student</BlockLabel>
      <Input type="text" name="student" id="student" />
      <BlockLabel htmlFor="title">Lesson Title</BlockLabel>
      <Input type="text" name="title" id="title" />
      <BlockLabel htmlFor="date">Date</BlockLabel>
      <Input type="date" name="date " id="date" />
      <BlockLabel htmlFor="time">Time</BlockLabel>
      <Input type="time" name="time" id="time" />
      <BlockLabel htmlFor="level">Select a level:</BlockLabel>
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
      <Fieldset>
        <Legend>Skills</Legend>
        <Input type="checkbox" name="reading" id="reading" />
        <Label htmlFor="reading">Reading</Label>
        <Input type="checkbox" name="writing" id="writing" />
        <Label htmlFor="writing">Writing</Label>
        <Input type="checkbox" name="speaking" id="speaking" />
        <Label htmlFor="speaking">Speaking</Label>
        <Input type="checkbox" name="listening" id="listening" />
        <Label htmlFor="listening">Listening</Label>
        <Input type="checkbox" name="grammar" id="grammar" />
        <Label htmlFor="grammar">Grammar</Label>
      </Fieldset>
      <BlockLabel htmlFor="doc-link">Document link</BlockLabel>
      <InputURL type="text" name="link" id="doc-link" />
      <Input
        type="checkbox"
        name="addresource"
        id="addresource"
        onChange={(event) => {
          setResourceChecked(event.target.checked);
        }}
      />
      <Label htmlFor="addresource">Add to Resources</Label>
      {/* add info about what this means if its checked. warning not to include personal info (use the same google doc)*/}
      {resourceChecked ? (
        <span>
          <br />
          WARNING: Adding to resources will make this available to all tutors.
          Please ensure the document does not contain any of your student's
          personal data.
        </span>
      ) : (
        <></>
      )}
      <Button type="submit"> Add New Lesson</Button>
    </Form>
  );
}

const Form = styled.form`
  max-width: 100ch;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: rgb(255, 244, 204);
  box-shadow: 0 5px 25px hsla(0, 0%, 0%, 0.5);
  width: fit-content;
  margin: 4rem auto;
  padding: 2.3rem 3.5rem;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
`;

const Label = styled.label`
  display: inline-block;
  margin: auto 1rem auto 0.2rem;
`;

const Input = styled.input`
  display: inline-block;
`;

const BlockLabel = styled.label`
  margin: 1.5rem auto 0.4rem;
  font-weight: 600;
`;

const Fieldset = styled.fieldset`
  margin: 1.5rem auto 0.4rem;
`;

const Legend = styled.legend`
  font-weight: 600;
`;

const Button = styled.button`
  margin: 1.5rem auto 0.4rem;
`;

const InputURL = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1.2rem;
`;
