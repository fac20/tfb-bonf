import React from 'react';
import logOut from '../../utils/logOut';
import {
  Anchor,
  CloseButton,
  LogoutButton,
  Nav,
  OpenButton,
  UL,
} from './Sidebar.style';

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
