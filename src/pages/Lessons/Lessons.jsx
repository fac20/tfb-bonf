import React from 'react';

const Lessons = () => {
  return (
    <>
      <h2>Tutee's Lessons</h2>
      <div>
        <h3>Upcoming</h3>
        <table border="1px 1px solid">
          <tr>
            <th>#</th>
            <th>Date/Time</th>
            <th>Title/Topic</th>
            <th>Skills</th>
            <th>Tutor</th>
          </tr>
          <tr>
            <td>4</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
        </table>
        <button type="button">Add New Lesson</button>
        <button type="button">Add Homework</button>
        <h3>Past</h3>
        <table border="1px 1px solid">
          <tr>
            <th>#</th>
            <th>Date/Time</th>
            <th>Title/Topic</th>
            <th>Skills</th>
            <th>Tutor</th>
          </tr>
          <tr>
            <td>1</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
          <tr>
            <td>2</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
          <tr>
            <td>3</td>
            <td>17/10/2020 14:30</td>
            <td>Phrasal Verbs and Prepositions</td>
            <td>Grammar</td>
            <td>Alex</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Lessons;
