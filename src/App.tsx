import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage'
import ForgotPasswordPage from "./screens/ForgotPassword";
import CheckEmailPage from "./screens/CheckEmail";
import NewPasswordPage from "./screens/NewPassword";
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
        <Route exact path="/reset" component={ForgotPasswordPage}>
        </Route>
        <Route exact path="/CheckEmail" component={CheckEmailPage}>
        </Route>
        <Route exact path="/NewPassword" component={NewPasswordPage}>
        </Route>

      </Switch>
    </HashRouter>
  );
}

export default App;