import React from 'react';
import NewLessonForm from './components/NewLessonForm/NewLessonForm.jsx';
import LessonsPage from './pages/LessonsPage/LessonsPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './connection.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage.jsx';
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
  if (!loggedIn) return <LoginPage />;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <>
            <Sidebar />
            <HomePage />
          </>
        </Route>
        <Route path="/home">
          <Sidebar />
          <HomePage />
        </Route>
        <Route path="/resources" exact>
          <Sidebar />
          <ResourcesPage />
        </Route>
        <Route path="/resources/:level" exact>
          <Sidebar />
          <ResourcesPage />
        </Route>
        <Route path="/resources/:level/:skill">
          <Sidebar />
          <ResourcesPage />
        </Route>
        <Route path="/lessons">
          <Sidebar />
          <LessonsPage>{(userEmail, userUID)}</LessonsPage>
        </Route>
        <Route path="/new-lesson-form">
          <Sidebar />
          <NewLessonForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
