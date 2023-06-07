import React from "react";
import "./NavBar.css";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

function NavBar() {
  const { signIn, signOut, state } = useAuthContext();
  return (
    <>
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/#">
              <img
                src={logo}
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </Link>
            <div
              className="navbar-burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start"></div>

            <div className="navbar-end">
              {state.isAuthenticated && (
                <Link className="navbar-item ml-4" to="/dashboard">
                  Dashboard
                </Link>
              )}

              <Link className="navbar-item ml-4" to="#">
                About
              </Link>
              <Link className="navbar-item ml-4" to="/feature">
                Features
              </Link>
              <Link className="navbar-item ml-4" to="/price">
                Pricing
              </Link>
              <Link className="navbar-item ml-4" to="#">
                Contact us
              </Link>
              {state.isAuthenticated ? (
                <a className="navbar-item ml-4">
                  <button
                    className="button danger-button"
                    style={{ color: "black" }}
                    onClick={() => {
                      sessionStorage.removeItem("role");
                      sessionStorage.removeItem("userId");
                      signOut()}}
                  >
                    Sign Out
                  </button>
                </a>
              ) : (
                <a className="navbar-item ml-4">
                  <button
                    className="button gradient-button"
                    style={{ color: "black" }}
                    onClick={() => signIn()}
                  >
                    Log in
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
