import React from "react";
import "./NavBar.css";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

function NavBar() {
  const { signIn, signOut } = useAuthContext();
  return (
    <>
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="">
              <img
                src={logo}
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
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
              <a className="navbar-item ml-4">
                <button
                  className="button gradient-button"
                  style={{ color: "black" }}
                  onClick={() => signIn()}
                >
                  Log in
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
