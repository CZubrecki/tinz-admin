import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const mapStateToProps = (state: any) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(function App() {
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
});
