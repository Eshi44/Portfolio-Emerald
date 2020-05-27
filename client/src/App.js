import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './containers/Main/Main';
import ThirdWaveCoffee from "../src/containers/Portfolio-Pages/ThirdWaveCoffee";
import ConcertHunt from "../src/containers/Portfolio-Pages/ConcertHunt";
import PokeBattle from "../src/containers/Portfolio-Pages/PokeBattle";

function App() {
  return (
    <Router>

      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} /> 
      <Route exact path="/third-wave-coffee" component={ThirdWaveCoffee} /> 
      <Route exact path="/concert-hunt" component={ConcertHunt} /> 
      <Route exact path="/pokebattle" component={ConcertHunt} /> 
    </Router>
  );
}

export default App;
