import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './connection.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
