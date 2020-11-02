import { auth } from './connection.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { db } from './connection';
import HomePage from './pages/HomePage/HomePage.jsx';
import LessonsPage from './pages/LessonsPage/LessonsPage.jsx';
import LinksPage from './pages/LinksPage/LinksPage.jsx';
import Loading from './components/Loading/Loading.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import React from 'react';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userEmail, setUserEmail] = React.useState('');
  const [userUID, setUserUID] = React.useState('');
  const [tutorData, setTutorData] = React.useState('');
  const [upcomingLessonsArray, setUpcomingLessonsArray] = React.useState('');
  const [pastLessonsArray, setPastLessonsArray] = React.useState('');
  const [newLesson, setNewLesson] = React.useState(false);

  React.useEffect(() => {
    const checkFirebaseUser = auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoading(false);
        setLoggedIn(true);
        setUserEmail(user.email);
        setUserUID(user.uid);
        db.collection('tutors')
          .doc(user.uid)
          .get()
          .then((doc) => setTutorData(doc.data()));
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
            <HomePage
              tutorData={tutorData}
              upcomingLessonsArray={upcomingLessonsArray}
              setUpcomingLessonsArray={setUpcomingLessonsArray}
              pastLessonsArray={pastLessonsArray}
              setPastLessonsArray={setPastLessonsArray}
              newLesson={newLesson}
              setNewLesson={setNewLesson}
            />
          </>
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
          <LessonsPage
            tutorData={tutorData}
            upcomingLessonsArray={upcomingLessonsArray}
            setUpcomingLessonsArray={setUpcomingLessonsArray}
            pastLessonsArray={pastLessonsArray}
            setPastLessonsArray={setPastLessonsArray}
            newLesson={newLesson}
            setNewLesson={setNewLesson}
          >
            {(userEmail, userUID)}
          </LessonsPage>
        </Route>
        <Route path="/links">
          <Sidebar />
          <LinksPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
