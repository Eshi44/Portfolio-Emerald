import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './containers/Main/Main';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} /> 
    </Router>
  );
}

export default App;
