import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import injectContext from "./store/appContext";
import Home from './views/Home';
import Profile from './views/Profile';
import Navbar from './components/Navbar';
import './App.css';
import CardPlanet from './components/CardPlanet';
import CardVehicle from './components/CardVehicle';
import CardCharacter from './components/CardCharacter';


const App = () => {
  return <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/profile/planet/:id">
        <CardPlanet />
      </Route>
      <Route exact path="/profile/character/:id">
        <CardCharacter />
      </Route>
      <Route exact path="/profile/vehicle/:id">
        <CardVehicle />
      </Route>
      <Route render={() => <h1>Not Found</h1>}></Route>
    </Switch>
  </Router>;
};

export default injectContext(App);
