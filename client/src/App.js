import './App.css';
import React from 'react';
import {  Route,  Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <LandingPage />} />

        {/* <Route path="/Home" component={Home} />
        <Route path="/newComponet" exact render={() => <Newcomponent />} />
        <Route path="/addrecipe" exact render={() => <Recipes />} />
        <Route path="/details/:id" exact render={() => <Details />} />
        <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}

export default App;
