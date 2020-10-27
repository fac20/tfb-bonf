import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SkillSelectionPage() {
  const { level } = useParams();

  return (
    <>
      <h2>Which skill would you like to see resources for?</h2>
      <ul>
        <li>
          <Link to={`/resources/${level}/reading`}>Reading</Link>
        </li>
        <li>
          <Link to={`resources/${level}/writing`}>Writing</Link>
        </li>
        <li>
          <Link to={`resources/${level}/listening`}>Listening</Link>
        </li>
        <li>
          <Link to={`resources/${level}/speaking`}>Speaking</Link>
        </li>
        <li>
          <Link to={`resources/${level}/grammar`}>Grammar</Link>
        </li>
      </ul>
    </>
  );
}
