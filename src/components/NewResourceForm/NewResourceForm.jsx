import React from 'react';
import { db } from '../../connection.js';
import {
  BlockLabel,
  Button,
  Fieldset,
  Form,
  Input,
  Label,
  Legend,
} from './NewResourceForm.style';

export default function NewResourceForm() {
  const [formData, setFormData] = React.useState({});

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

    db.collection('resources').doc().set({
      title: formData.title,
      level: formData.level,
      skills: formData.skills,
      link: formData.link,
    });
  }, [formData]); //would this make it submit twice?

  return (
    <Form onSubmit={submitData}>
      <BlockLabel htmlFor="title">Lesson Title</BlockLabel>
      <Input type="text" name="title" id="title" />
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
      <BlockLabel htmlFor="">Document link</BlockLabel>
      <Input type="url" name="link" id="doc-link" />
      <Button type="submit"> Add resource to collection</Button>
    </Form>
  );
}
