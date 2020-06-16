import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Fibonacci from './Fibonacci';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div className="App">
        <Route exact path="/" component={Fibonacci} />
        <Route exact path="/otherpage" component={OtherPage} />
      </div>
    </Router>

  );
}

export default App;
