import React from 'react';
import logOut from '../../utils/logOut';
import { logo150 } from '../../assets/images';
import {
  Anchor,
  CloseButton,
  LogoutButton,
  Nav,
  OpenButton,
  UL,
  LogoImage,
  LogoImageOpen,
} from './Sidebar.style';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState('13rem');
  const collapse = () => setSidebarWidth('0');
  const unfurl = () => setSidebarWidth('13rem');
  return (
    <>
      <OpenButton onClick={unfurl}>
        &equiv;
        <LogoImageOpen src={logo150} srcSet={`${logo150} 150w`} />
      </OpenButton>
      <Nav style={{ width: sidebarWidth }}>
        <CloseButton onClick={collapse}>&times;</CloseButton>
        <UL>
          <li>
            <LogoImage src={logo150} srcSet={`${logo150} 150w`} />
          </li>
          <li>
            <Anchor href="/">Home</Anchor>
          </li>
          <li>
            <Anchor href="/lessons">Lessons</Anchor>
          </li>
          <li>
            <Anchor href="/resources">Resources</Anchor>
          </li>
          {/* <li>
            <Anchor>Calendar</Anchor>
            <Anchor href="/calendar">Calendar</Anchor>
          </li> */}
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
