import React from 'react';
import logOut from '../../utils/logOut';
import styled from 'styled-components';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState('13rem');
  const collapse = () => setSidebarWidth('0');
  const unfurl = () => setSidebarWidth('13rem');
  return (
    <>
      <OpenButton onClick={unfurl}>&equiv;</OpenButton>
      <Nav style={{ width: sidebarWidth }}>
        <CloseButton onClick={collapse}>&times;</CloseButton>
        <UL>
          <li>
            <Anchor href="/">Home</Anchor>
          </li>
          <li>
            <Anchor href="/lessons">Lessons</Anchor>
          </li>
          <li>
            <Anchor href="/resources">Resources</Anchor>
          </li>
          <li>
            <Anchor href="/calendar">Calendar</Anchor>
          </li>
          <li>
            <Anchor href="/links">Useful Links</Anchor>
          </li>
          <li>
            <LogoutButton onClick={logOut}>Logout</LogoutButton>
          </li>
        </UL>
      </Nav>
    </>
  );
};

// Sidebar.propTypes = {
//     user: PropTypes.shape({}),
//     onLogout: PropTypes.func.isRequired,
//   };

//   Sidebar.defaultProps = {
//     user: null,
//   };

export default Sidebar;

const LogoutButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: #fff;
  border: none;
  box-shadow: 4px 4px 0 hsl(0, 0%, 50.6%);
  max-width: 10rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-radius: 10%;
  font-size: 1em;
  font-weight: 1000;
  &:hover {
    background: hsl(208, 99%, 69%);
  }
`;

const Nav = styled.nav`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 4rem; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
`;

/* Position and style the close button (top right corner) */
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 1rem;
  font-size: 3rem;
  color: hsl(0, 0%, 50.6%);
  background-color: none;
`;

const OpenButton = styled.button`
  position: absolute;
  top: 0;
  left: 1rem;
  font-size: 3rem;
  color: hsl(0, 0%, 50.6%);
  background-color: none;
`;

/* The sidebar links */
const Anchor = styled.a`
  padding: 0.5rem 0;
  text-decoration: none;
  font-size: 1.5em;
  color: hsl(0, 0%, 50.6%);
  display: block;
  transition: 0.3s;
  /* When you mouse over the navigation links, change their color */
  &:hover {
    color: #f1f1f1;
  }
`;

const UL = styled.ul`
  margin: auto;
  list-style-type: none;
`;

// @media screen and (max-height: 450px) {
//   nav {
//     padding-top: 15px;
//   }
//   nav a {
//     font-size: 18px;
//   }
// }
