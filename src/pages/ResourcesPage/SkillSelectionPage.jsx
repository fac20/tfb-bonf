import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../connection.js';
import Table from './../../components/Table/Table';
import NewResourceForm from '../../components/NewResourceForm/NewResourceForm.jsx';
import { LinkButton, SkillsBox, TitleBox } from './ResourcesPage.style';

export default function SkillSelectionPage() {
  const { level, skill } = useParams();
  const [newResource, setNewResource] = useState(false);
  const [resourceArray, setResourceArray] = React.useState('');

  // request resources by level and skill
  useEffect(() => {
    let res = [];
    db.collection('resources')
      .where('level', '==', level.toUpperCase())
      .where(`skills.${skill}`, '==', true)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          res.push(doc.data());
        });
        // create string of all skills
        res = res.map((resource) => {
          let skillsString = '';
          if (resource.skills.reading) skillsString += 'Reading ';
          if (resource.skills.writing) skillsString += 'Writing ';
          if (resource.skills.listening) skillsString += 'Listening ';
          if (resource.skills.speaking) skillsString += 'Speaking ';
          if (resource.skills.grammar) skillsString += 'Grammar ';
          return Object.assign(
            Object.fromEntries([['skillsString', skillsString]]),
            resource
          );
        });
        // console.log(res);
        setResourceArray(res);
      })
      .catch((error) => {
        console.log('Error getting documents:', error);
      });
  }, [skill, level]);

  const tableHeaders = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title', //click title for link to document
      },
      {
        Header: 'Level',
        accessor: 'level',
      },
      {
        Header: 'Skills',
        accessor: 'skillsString',
      },
      {
        Header: 'Link',
        accessor: 'link',
      },
    ],
    []
  );

  return (
    <>
      <TitleBox>
        <h2>Which skill would you like to see resources for?</h2>
      </TitleBox>
      <SkillsBox>
        <div>
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
        </div>
        <div>
          {skill && resourceArray ? (
            <Table columns={tableHeaders} data={resourceArray} />
          ) : (
            <></>
          )}
          <button onClick={() => setNewResource(!newResource)}>
            Add Resource
          </button>
        </div>
        {newResource ? <NewResourceForm /> : <></>}
      </SkillsBox>
    </>
  );
}
