import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../connection.js';
import { LinkButton, SkillsBox, TitleBox } from './ResourcesPage.style';

export default function SkillSelectionPage() {
  const { level, skill } = useParams();

  useEffect(() => {
    db.collection('resources')
      .where('level', '==', level.toUpperCase())
      // .where(`skills.${skill}`, '==', 'true')
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
      <TitleBox>
        <h2>Which skill would you like to see resources for?</h2>
      </TitleBox>
      <SkillsBox>
        <LinkButton>
          <Link to={`/resources/${level}/reading`}>Reading</Link>
        </LinkButton>
        <LinkButton>
          <Link to={`/resources/${level}/writing`}>Writing</Link>
        </LinkButton>
        <LinkButton>
          <Link to={`/resources/${level}/listening`}>Listening</Link>
        </LinkButton>
        <LinkButton>
          <Link to={`/resources/${level}/speaking`}>Speaking</Link>
        </LinkButton>
        <LinkButton>
          <Link to={`/resources/${level}/grammar`}>Grammar</Link>
        </LinkButton>
        {skill ? (
          <div>
            <h1>Lesson data placeholder for {skill}</h1>
          </div>
        ) : null}
      </SkillsBox>
    </>
  );
}
