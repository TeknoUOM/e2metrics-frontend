import React from "react";
import Footer from "../../common/Footer/Footer";
import NavBar from "../../common/NavBar/NavBar";
import './PricePage.css'

const PricePage = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body ">
        <div className="container has-text-centered">
          <h1 className="title is-2 mt-6">Choose your plan</h1>
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content price-card">
                  <div className="content">
                    <p className="title is-3 my-6">Free</p>
                    <p className="subtitle is-5 my-6">
                      <strong>$0</strong>/mo
                    </p>
                    <ul className="px-6">
                      <li className="my-6">
                        2 Repositories could add to analyze
                      </li>
                      <li className="my-6">
                        Primitive and Complex Metrics allowed
                      </li>
                      <button
                        className="button is-large"
                        style={{ backgroundColor: "#3CE794" }}
                      >
                        Start with Free
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content price-card">
                  <div className="content">
                    <p className="title is-3 my-6">Basic</p>
                    <p className="subtitle is-5 my-6">
                      <strong>$55</strong>/mo
                    </p>
                    <ul className="px-6">
                      <li className="my-6">
                        10 Number of Repositories could add to analyze
                      </li>
                      <li className="my-6">
                        Primitive, Complex and individual developer Metrics
                        allowed
                      </li>
                      <button className="button is-large basic-button">
                        Choose Plan
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content price-card">
                  <div className="content">
                    <p className="title is-3 my-6">Premium</p>
                    <p className="subtitle is-5 my-6">
                      <strong>$89</strong>/mo
                    </p>
                    <ul className="px-6">
                      <li className="my-6">
                        Unlimited Number of Repositories could add to analyze
                      </li>
                      <li className="my-6">
                        Primitive, Complex and individual developer Metrics
                        allowed
                      </li>
                      <li className="my-6">Metrics forecast</li>
                      <button
                        className="button is-large"
                        style={{ backgroundColor: "#3CE794" }}
                      >
                        Start with Free
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  );
};

export default PricePage;
