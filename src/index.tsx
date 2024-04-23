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
  signInRedirectURL:
    "https://09264f87-1ae4-4aa9-bf4b-53f66341d158.e1-us-east-azure.choreoapps.dev/dashboard/overview",
  signOutRedirectURL:
    "https://09264f87-1ae4-4aa9-bf4b-53f66341d158.e1-us-east-azure.choreoapps.dev/",
  clientID: "2C6sgeKa7ZIXInTYmdZg0j3Sf_Ia",
  baseUrl: "https://api.asgardeo.io/t/tekno",
  scope: ["openid", "profile", "address", "email", "groups", "phone"],
};
root.render(
  <AuthProvider config={config}>
    <App />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
