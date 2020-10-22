import React from 'react';
import './App.css';
import LoginPage from './pages/Login/Login.jsx';
import Lessons from './pages/Lessons/Lessons.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <LoginPage /> */}
      <Lessons />
    </div>
  );
}

export default App;
