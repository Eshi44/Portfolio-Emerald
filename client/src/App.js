import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './containers/Main/Main';
import ThirdWaveCoffee from "../src/containers/Portfolio-Pages/ThirdWaveCoffee";

function App() {
  return (
    <Router>

      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} /> 
      <Route exact path="/third-wave-coffee" component={ThirdWaveCoffee} /> 
    </Router>
  );
}

export default App;
