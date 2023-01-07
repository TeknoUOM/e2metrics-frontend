import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage}>
        </Route>
        <Route exact path="/login" component={LoginPage}>
        </Route>
        <Route exact path="/signup" component={SignUpPage}>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;