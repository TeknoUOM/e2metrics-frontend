import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import { AuthProvider } from "@asgardeo/auth-react";
import { useAuthContext } from "@asgardeo/auth-react";
import MyDetails from "./screens/Settings/Pages/MyDetails";
import Notifications from "./screens/Settings/Pages/Notifications";
import Reports from "./screens/Settings/Pages/Reports";
import Plan from "./screens/Settings/Pages/Plan";
import Billing from "./screens/Settings/Pages/Billing";
import Help from "./screens/Settings/Pages/Help";

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={state.isAuthenticated ? LoginPage : HomePage}
          ></Route>
          <Route exact path="/signup" component={SignUpPage}></Route>
          <Route path="/settings/mydetails" children={<MyDetails />} />
          <Route path="/settings/notifications" children={<Notifications />} />
          <Route path="/settings/reports" children={<Reports />} />
          <Route path="/settings/plan" children={<Plan />} />
          <Route path="/settings/billing" children={<Billing />} />
          <Route path="/settings/help" children={<Help />} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
