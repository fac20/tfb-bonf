import React from 'react';
import { useParams } from 'react-router-dom';
import LevelSelectionPage from './LevelSelectionPage.jsx';
import SkillSelectionPage from './SkillSelectionPage.jsx';
import { H1 } from './ResourcesPage.style';

export default function ResourcesPage() {
  const { level } = useParams();

  return (
    <main>
      <H1>Resources</H1>
      {level ? <SkillSelectionPage /> : <LevelSelectionPage />}
    </main>
  );
}
