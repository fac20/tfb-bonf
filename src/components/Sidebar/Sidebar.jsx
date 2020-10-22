import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState('20vw');
  const onLogout = () => {};
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
      <button onClick={onLogout}>Logout</button>
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
