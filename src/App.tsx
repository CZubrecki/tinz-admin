import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import BeersPage from './pages/Beer/BeersPage';
import BreweriesPage from './pages/Brewery/BreweriesPage';
import BreweryPage from './pages/Brewery/BreweryPage';
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
              <Route exact path="/beers" component={BeersPage} />
              <Route exact path="/breweries" component={BreweriesPage} />
              <Route path="/brewery/:id" component={BreweryPage} />
            </Switch>
        )} />
      </Switch>
    </Router>
  );
};
