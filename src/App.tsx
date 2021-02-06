import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
            <LoginPage />
        </Route>
        <ProtectedRoute render={() => (
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
        )} />
      </Switch>
    </Router>
  );
};
