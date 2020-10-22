import React from 'react';

import './App.css';
import LoginPage from './pages/Login/Login.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <LoginPage />
    </div>
  );
}

export default App;
