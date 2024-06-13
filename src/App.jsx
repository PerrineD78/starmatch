import React from 'react';
import AccueilPage from './Components/AccueilPage.jsx';

const App = () => {
  return (
    <div className="app">
      <AccueilPage />
    </div>
  );
};

export default App;




/*

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AccueilPage />
        </Route>
        <Route path="/select-planet">
        <SelectPlanetPage />
    </Route>
      </Switch>
    </Router>
  );
};

*/
