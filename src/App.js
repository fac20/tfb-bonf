import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login/Login.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import { Sidebar } from './components/sidebar/Sidebar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
