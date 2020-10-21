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
      <header className="App-header">
        <NewLessonForm />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
