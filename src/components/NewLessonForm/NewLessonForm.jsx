import React from 'react';
import { db } from '../../connection.js';

export default function NewLessonForm() {
  return (
    <>
      <form>
        <label htmlFor="student">Student</label>
        <input type="text" id="student" />
        <label htmlFor="title">Lesson Title</label>
        <input type="text" id="title" />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
        <label htmlFor="time">Time</label>
        <input type="time" id="time" />
        <label htmlFor="level">Level</label>
        <input type="text" id="level" />
        <label htmlFor="skills">Skills</label>
        <input type="text" id="skills" />
        <label htmlFor="">Document link</label>
        <input type="url" id="doc-link" />
        <input type="checkbox" id="add-resource" />
        <label htmlFor="add-resource">Add to Resources</label>
        <button type="submit"> Add New Lesson</button>
      </form>
    </>
  );
}
