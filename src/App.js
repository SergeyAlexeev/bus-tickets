import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';


const App = () => (
  <Router>
    <Route path={'/:hash?'} component={Home} />
  </Router>
);


const Home = ({ match: { params: { hash } } }) => {
  let number = 'xxxxxx';
  try {
    number = atob(hash);
  } catch(e) {}

  return (
    <div className="App">
      <div className="ticket">
        <div className="ticket-number"><pre>{number}</pre></div>
      </div>
    </div>
  );
}

export default App;
