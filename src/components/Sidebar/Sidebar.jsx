import React from 'react';
import './sidebar.css';
import logOut from '../../utils/logOut';
import styled from 'styled-components';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState('20vw');
  const collapse = () => setSidebarWidth('0');
  return (
    <nav style={{ width: sidebarWidth }}>
      <a href="# " className="closebtn" onClick={collapse}>
        &times;
      </a>
      <a href="/">Home</a>
      <a href="/lessons">Lessons</a>
      <a href="/resources">Resources</a>
      <a href="/calendar">Calendar</a>
      <a href="/links">Useful Links</a>
      <LogoutButton onClick={logOut}>Logout</LogoutButton>
    </nav>
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
  box-shadow: 4px 4px 0 hsl(0, 0%, 50.588235294117645%);
  max-width: 120px;
  cursor: pointer;
  padding: 10px;
  margin: 2rem;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 900;
  &:hover {
    background: hsl(208, 99%, 69%);
  }
`;

// const Nav = styled.nav`
//   height: 100%; /* 100% Full-height */
//   width: 0; /* 0 width - change this with JavaScript */
//   position: fixed; /* Stay in place */
//   z-index: 1; /* Stay on top */
//   top: 0;
//   left: 0;
//   background-color: #111; /* Black*/
//   overflow-x: hidden; /* Disable horizontal scroll */
//   padding-top: 60px; /* Place content 60px from the top */
//   transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
// `;
