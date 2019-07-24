import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <Route exact path={process.env.PUBLIC_URL + '/:hash?'} component={Home} />
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
