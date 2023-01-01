import React from "react";
import './index.css';
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import LoginCard from "./components/LoginCard/LoginCard";

function LoginPage() {
  return (
    <>
      <NavBar />
      <section className="hero is-fullheight-with-navbar">
        <div class="hero-body gradient-bg">
          <div className="container align">
            <div className="big-logo">
              <img src="https://bulma.io/images/bulma-logo.png"/>
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
