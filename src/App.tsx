import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage'
import { AuthProvider } from "@asgardeo/auth-react";
import { useAuthContext } from "@asgardeo/auth-react"; 
import Dashboard from "./screens/Dashboard";


function App() {
  

  const { state, signIn, signOut } = useAuthContext();

  return (
    <>
    <HashRouter>
      <Switch>
        <Route path="/dashboard" element= {<Dashboard/>}/>
        <Route exact path="/" component={state.isAuthenticated ?LoginPage:HomePage}></Route>
        <Route exact path="/signup" component={SignUpPage}>
        </Route>
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;