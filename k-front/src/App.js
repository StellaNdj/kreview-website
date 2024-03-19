import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReviewDetails from './pages/ReviewDetails'
import Homepage from './pages/Homepage'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/details/:id">
            <ReviewDetails></ReviewDetails>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
