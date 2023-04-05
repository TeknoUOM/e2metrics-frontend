import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bulma/css/bulma.min.css";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const config = {
  signInRedirectURL: "http://localhost:3000/dashboard",
  signOutRedirectURL: "http://localhost:3000",
  clientID: "2C6sgeKa7ZIXInTYmdZg0j3Sf_Ia",
  baseUrl: "https://api.asgardeo.io/t/tekno",
  scope: ["openid", "profile", "address", "email", "groups", "phone"],
};
root.render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
