import React, { useState } from "react";
import Footer from "../../common/Footer/Footer";
import NavBar from "../../common/NavBar/NavBar";
import "./PricePage.scss";
import Loading from "../../common/Loading/Loading";
import Price from "./Component/Price";

const PricePage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="hero is-fullheight">
          <div className="hero-head">
            <NavBar />
          </div>
          <Price setLoading={setLoading} />
          <div className="hero-foot">
            <Footer />
          </div>
        </section>
      )}
    </>
  );
};

export default PricePage;
