import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';

export const Sidebar = ({}) => {
  const [sidebarWidth, setSidebarWidth] = React.useState('20vw');
  const onLogout = () => {};
  const collapse = () => setSidebarWidth('0');
  return (
    <nav style={{ width: sidebarWidth }}>
      <a href="javascript:void(0)" className="closebtn" onClick={collapse}>
        &times;
      </a>
      <a>Home</a>
      <a>Lessons</a>
      <a>Resources</a>
      <a>Calendar</a>
      <a>Links</a>
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
