import React from 'react';
import { Link } from 'react-router-dom';

export default function LevelSelectionPage() {
  return (
    <>
      <h2>What level is your student at?</h2>
      <ul>
        <li>
          <Link to="/resources/a1">A1 - complete beginner</Link>
        </li>
        <li>
          <Link to="/resources/a2">A2 - elementary</Link>
        </li>
        <li>
          <Link to="/resources/b1">B1 - intermediate</Link>
        </li>
        <li>
          <Link to="/resources/b2">B2 - upper intermediate</Link>
        </li>
        <li>
          <Link to="/resources/c1">C1 - advanced</Link>
        </li>
        <li>
          <Link to="/resources/c2">C2 - proficient</Link>
        </li>
      </ul>
    </>
  );
}
