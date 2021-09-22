import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Index";
import Dashboard from "./components/dashboard/Index";
import Restricted from "./components/dashboard/common/Restricted";
import { requestFirebaseNotificationPermission } from "./components/dashboard/pages/common/Config";

function App() {
  requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      // eslint-disable-next-line no-console
    })
    .catch((err) => {
      return err;
    });

  return (
    <Router basename="/mobileapp">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/restricted" component={Restricted} />
      </Switch>
    </Router>
  );
}

export default App;
