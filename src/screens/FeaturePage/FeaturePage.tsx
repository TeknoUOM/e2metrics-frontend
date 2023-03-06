import React from "react";
import Footer from "../../common/Footer/Footer";
import NavBar from "../../common/NavBar/NavBar";
import featureImage from "../../images/features.png";
import "./FeaturePage.css";

const FeaturePage = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="row my-6">
                <h1 className="title is-1">Features</h1>
              </div>
              <div className="row">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <ul>
                        <li className="subtitle is-4">
                          Compare two repositories
                        </li>
                        <li className="subtitle is-4">Customize dashboard</li>
                        <li className="subtitle is-4">Forecast metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column has-text-right">
              <img
                className="image-container"
                src={featureImage}
                alt="Placeholder image"
              />
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

export default FeaturePage;
