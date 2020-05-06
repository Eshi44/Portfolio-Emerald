import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
// import axios from "axios";
import Main from './containers/Main';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} /> 
    </Router>
  );
}

export default App;
