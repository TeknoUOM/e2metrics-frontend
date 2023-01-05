import React from "react";
import './index.css';
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import LoginCard from "./components/LoginCard/LoginCard";
import logo from './../../images/logo.png'

function LoginPage() {
  return (
    <>
      <NavBar />
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body gradient-bg">
          <div className="container align">
            <div className="big-logo">
              <img className="logo" src={logo}/>
            </div>
            <LoginCard/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LoginPage;
