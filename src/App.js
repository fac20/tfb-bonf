import React from 'react';
import NewLessonForm from './components/NewLessonForm/NewLessonForm.jsx';
import LessonsPage from './pages/LessonsPage/LessonsPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './connection.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import findTutorWithEmail from './utils/findTutorWithEmail';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  // const [userEmail, setUserEmail] = React.useState('');
  const [tutorData, setTutorData] = React.useState({}); //how to use useContext (is it useful in this case at all)
  //make a context object
  //components can subscribe to that context

  //authentication needs to be inside a useEffect
  //potentially could create an infinite loop
  useEffect(() => {
    if (loggedIn) {
    async function () {
      await auth().onAuthStateChanged(async (user) => {
        // short-circuit this handler
        if (loggedIn) {
          return false;
        }

        if (user) {
          // User is signed in.
          setLoggedIn(true);

          await findTutorWithEmail(user.email).then((data) => {
            setTutorData(data);
          });
        } else {
          // No user is signed in.
          setLoggedIn(false);
        }
      });
    }
  }}, [loggedIn]);

  // var user = auth().currentUser;
  // var uid;

  // if (user != null) {
  //   setUserEmail(user.email);
  //   uid = user.uid;
  // }

  // React.useEffect(() => {
  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
  //   findTutorWithEmail(userEmail).then((data) => setTutorData(data));
  //   console.log(uid, tutorData);
  // }, [userEmail]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {loggedIn ? (
            <>
              <Sidebar />
              {/* <HomePage /> */}
              <NewLessonForm />
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
          <LessonsPage />
        </Route>
        <Route path="/newlessons">
          <NewLessonForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
