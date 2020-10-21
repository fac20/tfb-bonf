import React from 'react';

import NewLessonForm from './components/NewLessonForm/NewLessonForm.jsx';
import './App.css';
import LoginPage from './components/login/Login.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <LoginPage /> */}
      <NewLessonForm />
    </div>
  );
}

export default App;
