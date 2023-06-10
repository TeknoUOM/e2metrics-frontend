import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Router } from "react-router-dom";
import HomePage from "./screens/HomePage";
import { useAuthContext } from "@asgardeo/auth-react";
import Payment from "./screens/Payment/PaymentPage";
import FeaturePage from "./screens/FeaturePage/FeaturePage";
import PricePage from "./screens/PricePage/PricePage";
import PaymentPage from "./screens/Payment/PaymentPage";
import PaymentPage2 from "./screens/Payment2/PaymentPage";
import AddRepositories from "./screens/AddRepositories/Index";
import PickRepositories from "./screens/PickRepository/Index";
import Dashboard from "./screens/Dashboard/Dashboard";
import LogFirst from "./common/LogFirst/LogFirst";
import "./App.css";
import UnderConstruction from "./common/UnderConstruction/UnderConstruction";
import NotFound from "./common/NotFound/NotFound";

function App() {
  const { state } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/feature" component={FeaturePage}></Route>
          <Route exact path="/price" component={PricePage}></Route>
          <Route exact path="/LogFirst" component={LogFirst}></Route>
          {state.isAuthenticated ? (
            <>
              <Route exact path="/payment/:plan" component={Payment}></Route>
              <Route
                exact
                path="/addRepositories/start"
                component={AddRepositories}
              ></Route>
              <Route exact path="/addRepositories/repos/:user/:repo">
                <PickRepositories />
              </Route>
              <Route exact path="/addRepositories/repos">
                <PickRepositories />
              </Route>
              <Route exact path="/settings">
                <UnderConstruction feature="Settings" backButton={true} />
              </Route>
              <Route exact path="/settings/*">
                <UnderConstruction feature="Settings" backButton={true} />
              </Route>
              <Route exact path="/checkout" component={PaymentPage}></Route>
              <Route exact path="/dashboard/*" component={Dashboard}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
            </>
          ) : (
            <>
              <Route exact path="/payment/:plan" component={LogFirst}></Route>
              <Route
                exact
                path="/addRepositories/start"
                component={LogFirst}
              ></Route>
              <Route exact path="/addRepositories/repos/:user/:repo">
                <LogFirst />
              </Route>
              <Route exact path="/addRepositories/repos">
                <LogFirst />
              </Route>

              <Route exact path="/checkout" component={LogFirst}></Route>
              <Route exact path="/dashboard" component={LogFirst}></Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
