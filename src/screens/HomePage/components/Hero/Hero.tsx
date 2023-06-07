import React from "react";
import "./Hero.css";
import Image from "./../../../../images/hero/main.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";

function Hero() {
  const { signIn, state } = useAuthContext();
  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column main-content mr-6">
            <p className="title is-1">
              Engineering Efficiency Metrics on Github
            </p>
            <p className="">
              Screenful Dashboards for GitHub helps you to stay on track with
              your projects. This add-on brings you visual dashboards and
              automated reports that you can share with your team.{" "}
            </p>
            {!state.isAuthenticated && (
              <a
                className="button gradient-button mt-6"
                style={{ color: "black" }}
                onClick={() => signIn()}
              >
                Get Started
              </a>
            )}
          </div>
          <div className="column ">
            <img src={Image} className="main-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
