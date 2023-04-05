
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import { useAuthContext } from "@asgardeo/auth-react";
import Payment from "./screens/Payment/PaymentPage";
import { Payhere, AccountCategory } from "payhere-js-sdk";
import FeaturePage from "./screens/FeaturePage/FeaturePage";
import PricePage from "./screens/PricePage/PricePage";
import PaymentPage from "./screens/Payment/PaymentPage";
import AddRepositories from "./screens/AddRepositories/Index";
import PickRepositories from "./screens/PickRepository/Index";
import Dashboard from "./screens/Dashboard/Dashboard";

function App() {
  const { state } = useAuthContext();

  return (
    <div id="payhere-modal">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={state.isAuthenticated ? LoginPage : HomePage}
          ></Route>
          <Route exact path="/signup" component={SignUpPage}></Route>
          <Route exact path="/payment" component={Payment}></Route>
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
          <Route exact path="/feature" component={FeaturePage}></Route>
          <Route exact path="/price" component={PricePage}></Route>
          <Route exact path="/checkout" component={PaymentPage}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
