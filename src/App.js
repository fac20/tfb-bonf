import React from 'react';
// import NewLessonForm from './components/NewLessonForm/NewLessonForm.jsx';
// import LessonsPage from './pages/LessonsPage/LessonsPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './connection.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage.jsx';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      setLoggedIn(true);
    } else {
      // No user is signed in.
      setLoggedIn(false);
    }
  });

  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {loggedIn ? (
              <>
                <Sidebar />
                <HomePage />
              </>
            ) : (
              <LoginPage />
            )}
          </Route>
          <Route path="/home">
            <Sidebar />
            <HomePage />
          </Route>
          <Route path="/resources">
            <Sidebar />
            <ResourcesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
