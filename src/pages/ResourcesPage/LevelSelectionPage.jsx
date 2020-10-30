import React from 'react';
import { Link } from 'react-router-dom';
import {
  LevelBox,
  LinkButton,
  PageContainer,
  TitleBox,
} from './ResourcesPage.style';

export default function LevelSelectionPage() {
  return (
    <>
      <TitleBox>
        <h2>What level is your student at?</h2>
      </TitleBox>
      <PageContainer>
        <LevelBox style={{ background: '#fff4cc' }}>
          Beginner
          <LinkButton>
            <Link to="/resources/a1">A1 - complete beginner</Link>
          </LinkButton>
          <LinkButton>
            <Link to="/resources/a2">A2 - elementary</Link>
          </LinkButton>
        </LevelBox>
        <LevelBox style={{ background: '#D6FCF7' }}>
          Intermediate
          <LinkButton>
            <Link to="/resources/b1">B1 - intermediate</Link>
          </LinkButton>
          <LinkButton>
            <Link to="/resources/b2">B2 - upper intermediate</Link>
          </LinkButton>
        </LevelBox>
        <LevelBox style={{ background: '#FFE8E8' }}>
          Advanced
          <LinkButton>
            <Link to="/resources/c1">C1 - advanced</Link>
          </LinkButton>
          <LinkButton>
            <Link to="/resources/c2">C2 - proficient</Link>
          </LinkButton>
        </LevelBox>
      </PageContainer>
    </>
  );
}
