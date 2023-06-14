import React, { useState } from "react";
import Footer from "../../common/Footer/Footer";
import NavBar from "../../common/NavBar/NavBar";
import "./PricePage.scss";
import Price from "./Component/Price";

const PricePage = () => {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-head">
          <NavBar />
        </div>
        <Price />
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default PricePage;
