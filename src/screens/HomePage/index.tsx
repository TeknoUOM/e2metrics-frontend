import React from "react";
import "./index.css";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";
import Hero from "./components/Hero/Hero";

function HomePage() {
  return (
    <>
      <NavBar />
      <section className="hero is-fullheight-with-navbar hero-bg-color">
        <div className="hero-body">
          <Hero />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
