import React from 'react';
import { useParams } from 'react-router-dom';

export default function SkillSelectionPage() {
  const { level } = useParams();

  return (
    <>
      <h2>Which skill would you like to see resources for?</h2>
      <ul>
        <li>
          <a href={`/resources/${level}/reading`}>Reading</a>
        </li>
        <li>
          <a href={`resources/${level}/writing`}>Writing</a>
        </li>
        <li>
          <a href={`resources/${level}/listening`}>Listening</a>
        </li>
        <li>
          <a href={`resources/${level}/speaking`}>Speaking</a>
        </li>
        <li>
          <a href={`resources/${level}/grammar`}>Grammar</a>
        </li>
      </ul>
    </>
  );
}
