import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/details/:id">
            <ReviewDetails></ReviewDetails>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
