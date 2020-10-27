import React from 'react';
// import NewLessonForm from './components/NewLessonForm/NewLessonForm.jsx';
import LessonsPage from './pages/LessonsPage/LessonsPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './connection.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Loading from './components/Loading/Loading.jsx';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userEmail, setUserEmail] = React.useState('');
  const [userUID, setUserUID] = React.useState('');

  React.useEffect(() => {
    const checkFirebaseUser = auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false);
        setLoggedIn(true);
        setUserEmail(user.email);
        setUserUID(user.uid);
      } else {
        // No user is signed in.
        setIsLoading(false);
        setLoggedIn(false);
      }
    });
    return () => checkFirebaseUser();
  }, []);

  if (isLoading) return <Loading />;

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
        <Route path="/lessons">
          <Sidebar />
          <LessonsPage>{(userEmail, userUID)}</LessonsPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
