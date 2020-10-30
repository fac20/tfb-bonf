import React from 'react';
import styled from 'styled-components';
import {
  TitleBox,
  PageContainer,
} from './../ResourcesPage/ResourcesPage.style';

export default function LinksPage() {
  return (
    <main>
      <TitleBox>
        <h1>Useful Links</h1>
      </TitleBox>
      <PageContainer>
        <LinksBox>
          <LinkButton href="https://login.globalenglish.com/index.php?redirectUrl=">
            Global English API
          </LinkButton>
          <LinkButton href="https://login.globalenglish.com/index.php?redirectUrl=">
            Moodle
          </LinkButton>
          <LinkButton href="https://docs.google.com/document/d/12rGIfsWdgAHiElmrn5aQrg1JPzXUu-y_chfJPSNTitw/edit">
            Tutor's Starter Pack
          </LinkButton>
        </LinksBox>
      </PageContainer>
    </main>
  );
}

export const LinksBox = styled.div`
  align-items: center;
  background-color: #fee8e8;
  border-radius: 20px;
  border: 1px solid black;
  box-shadow: 4px 4px 0 black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  width: fit-content;
`;

export const LinkButton = styled.a`
  text-align: center;
  background-color: #e9e7fc;
  border-radius: 0.8rem;
  border: 2px solid black;
  box-shadow: 4px 4px 0 black;
  color: black;
  margin: 1rem;
  padding: 1rem;
  text-decoration: none;
  width: 14rem;
`;
