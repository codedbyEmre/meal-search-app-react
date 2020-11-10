import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleMeal from "./pages/SingleMeal";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/meal/:id">
          <SingleMeal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
