import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/Landing";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/:slug" component={Landing} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
