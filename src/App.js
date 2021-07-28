import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Index';
import Dashboard from './components/dashboard/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>

    </Router>
  );
}

export default App;
