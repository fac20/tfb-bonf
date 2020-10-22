import React from 'react';
import './sidebar.css';
import logOut from '../../utils/logOut';

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
      <a href="/links">Links</a>
      <button onClick={logOut}>Logout</button>
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
