import React from 'react';

export default function LevelSelectionPage() {
  return (
    <>
      <h2>What level is your student at?</h2>
      <ul>
        <li>
          <a href="/resources/a1">A1 - complete beginner</a>
        </li>
        <li>
          <a href="/resources/a2">A2 - elementary</a>
        </li>
        <li>
          <a href="/resources/b1">B1 - intermediate</a>
        </li>
        <li>
          <a href="/resources/b2">B2 - upper intermediate</a>
        </li>
        <li>
          <a href="/resources/c1">C1 - advanced</a>
        </li>
        <li>
          <a href="/resources/c2">C2 - proficient</a>
        </li>
      </ul>
    </>
  );
}
