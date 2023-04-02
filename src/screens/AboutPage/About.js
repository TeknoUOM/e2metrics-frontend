import React, { useState } from "react";
import "./About.css";
import img from "./dashboard.png";
import FAQ from "./FAQ";
import CarouselComponent from "./carousel.component";

export default function About() {
  return (
    <>
      <div className="container-box ">
        <div className="column is-left is-half">
          <h1 className="header mt-5 mb-5">
            GitHub Performance Dashboard for Visual Analytics
          </h1>
          <p class="has-text-left ml-6 has-text-black" className="content-main">
            Developing targeted strategies and trying to maximize ROI for your
            clients? No matter your marketing activities and goals, you’ll need
            a performance dashboard to gain an understanding of your campaigns.
            Grab our template and improve your promotional efforts for your
            clients. Dive deep into vital metrics, KPIs, and data analytics and
            gauge how effective your clients’ initiatives are.
            <button className="GetStartedNow"> Get Started Now</button>
          </p>
        </div>
        <div className="column is-right is-half">
          <figure class="image1 ">
            <img src={img} alt="" />
          </figure>
        </div>
      </div>

      <div className="content-1 mt-6 mb-6 ">
        <p class="has-text-weight-bold is-size-2 has-text-centered has-text-grey-darker ">
          What is a performance dashboard?
        </p>

        <div>
          <p class="mt-6 has-text-centered has-text-weight-semibold has-text-grey-dark">
            A performance dashboard is a document containing your most important
            KPIs and metrics from the marketing and sales tools you work with
            every day. There are no two same performance dashboards - the way
            they look will depends entirely on the KPIs and tools you use. This
            dashboard outlines your performance for the most important areas of
            your business, be it sales, marketing or something else.
          </p>
        </div>
      </div>

      <div className="content-1 mt-6">
        <p class="has-text-weight-bold is-size-2 has-text-centered has-text-grey-darker">
          Effortlessly report, monitor and analyze your GitHub projects.
        </p>
      </div>

      <hr className="hrLine"></hr>

      <div className="faq-container is-flex">
        <div className="column  is-left ml-6 p-6">
          <p className="has-text-weight-bold is-size-2 pl-6 has-text-grey-darker"> FAQs</p>
          <p className="is-size-5 pl-6 mt-4  has-text-grey-dark ">
            All your questions answered. And if you can’t find it here, contact
            to our friendly team
          </p>
        </div>
        <div className="column is-three-fifths is-right">
          <FAQ></FAQ>
        </div>
      </div>

      <div>
        <CarouselComponent/>
      </div>
    </>
  );
}
