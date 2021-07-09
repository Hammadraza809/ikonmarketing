import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/Index';
import Dashboard from './components/dashboard/Index';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Router>
  );
}

export default App;
