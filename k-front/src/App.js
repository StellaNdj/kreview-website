import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReviewDetails from './pages/ReviewDetails';
import Reviews from './pages/Reviews';
import DramaDetails from './pages/DramaDetails';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Header />
        <div className="App container">
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/reviews/:id">
            <ReviewDetails></ReviewDetails>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/dramas/:id">
            <DramaDetails></DramaDetails>
          </Route>
        </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
