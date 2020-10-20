import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './sidebar.css';

export const Sidebar = ({}) => {
  const [sidebarVisible, setSidebarVisible] = React.useState(true);
  const onLogout = () => {};
  //   document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
  const collapse = () => {};
  return (
    <nav style={`width: `}>
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
