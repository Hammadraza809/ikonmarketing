import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Index";
import Dashboard from "./components/dashboard/Index";
import Restricted from "./components/dashboard/common/Restricted";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/restricted" component={Restricted} />
      </Switch>
    </Router>
  );
}

export default App;
