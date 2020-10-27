import React from 'react';
import { useParams } from 'react-router-dom';
import LevelSelectionPage from './LevelSelectionPage.jsx';
import SkillSelectionPage from './SkillSelectionPage.jsx';

export default function ResourcesPage() {
  const { level } = useParams();

  return <main>{level ? <SkillSelectionPage /> : <LevelSelectionPage />}</main>;
}
