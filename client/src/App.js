import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './containers/Main/Main';
import ThirdWaveCoffee from "../src/containers/Portfolio-Pages/ThirdWaveCoffee";
import ConcertHunt from "../src/containers/Portfolio-Pages/ConcertHunt";
import PokeBattle from "../src/containers/Portfolio-Pages/PokeBattle";
import EatDaBurger from "../src/containers/Portfolio-Pages/EatDaBurger";
import EmployeeDirectory from "../src/containers/Portfolio-Pages/EmployeeDirectory";
import TeamGenerator from "../src/containers/Portfolio-Pages/TeamGenerator";


function App() {
  return (
    <Router>

      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} /> 
      <Route exact path="/third-wave-coffee" component={ThirdWaveCoffee} /> 
      <Route exact path="/concert-hunt" component={ConcertHunt} /> 
      <Route exact path="/pokebattle" component={PokeBattle} /> 
      <Route exact path="/eat-da-burger" component={EatDaBurger} /> 
      <Route exact path="/employee-directory" component={EmployeeDirectory} /> 
      <Route exact path="/team-generator" component={TeamGenerator} /> 
    </Router>
  );
}

export default App;
