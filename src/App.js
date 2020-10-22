import React from 'react';
import NewLessonForm from './components/NewLessonForm/NewLessonForm.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './connection.js';
import LoginPage from './pages/Login/Login.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

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
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <HomePage /> : <LoginPage />}
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
