import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../connection.js';

export default function SkillSelectionPage() {
  const { level, skill } = useParams();

  useEffect(() => {
    db.collection('resources')
      .where('level', '==', level.toUpperCase())
      // .where(skill, '==', 'true')
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach((doc) => {
          console.log('Document data:', doc.data());
        })
      )
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  });

  return (
    <>
      <h2>Which skill would you like to see resources for?</h2>
      <ul>
        <li>
          <Link to={`/resources/${level}/reading`}>Reading</Link>
        </li>
        <li>
          <Link to={`/resources/${level}/writing`}>Writing</Link>
        </li>
        <li>
          <Link to={`/resources/${level}/listening`}>Listening</Link>
        </li>
        <li>
          <Link to={`/resources/${level}/speaking`}>Speaking</Link>
        </li>
        <li>
          <Link to={`/resources/${level}/grammar`}>Grammar</Link>
        </li>
      </ul>
      {skill ? (
        <div>
          <h1>Lesson data placeholder for {skill}</h1>
        </div>
      ) : null}
    </>
  );
}
