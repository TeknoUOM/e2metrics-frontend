import React, { useState } from "react";
import "./About.css";
import img from "./dashboard.png";
import FAQ from "./FAQ";
import FeedbackCarousel from "./FeedbackCarousel";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/Footer/Footer";

export default function About() {
  return (
    <>
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="container-box ">
        <div className="column is-left is-half">
          <h1 className="header mb-5">
            GitHub Performance Dashboard for Visual Analytics
          </h1>
          <p
            class=" ml-6 has-text-black has-text-left"
            className="content-main"
          >
            Welcome to our platform, where you can access a powerful dashboard
            for analyzing and visualizing GitHub metrics. Our site offers a
            user-friendly interface to help you track your progress, compare
            data, and optimize your workflows. Discover new insights and improve
            your GitHub experience with our comprehensive toolset.
            <a href="../LandingPage">
              <button className="GetStartedNow">Get Started Now</button>
            </a>
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
          What is a GitHub performance dashboard?
        </p>

        <div>
          <p class="mt-6 has-text-centered has-text-weight-semibold has-text-grey-dark">
            Our GitHub dashboard is a powerful analytics tool that provides you
            with real-time insights into your GitHub activity. With customizable
            charts and graphs, you can easily monitor and compare metrics such
            as commits, pull requests, and issues. Our platform also offers
            advanced analytics capabilities, enabling you to identify trends,
            track progress, and optimize workflows. Whether you're a developer,
            team lead, or project manager, our GitHub dashboard is the ultimate
            solution for maximizing productivity and performance.
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
        <div className="column is-left ml-6 p-6">
          <p className="has-text-weight-bold is-size-2 pl-6 has-text-grey-darker">
            FAQs
          </p>
          <p className="is-size-5 pl-6 mt-4  has-text-grey-dark">
            All your questions answered. And if you can’t find it here, contact
            to our friendly team
          </p>
          <div className="faq-box mt-4">
            <i className="fas fa-question fa-2x"></i>
          </div>
        </div>

        <div className="column is-three-fifths is-right">
          <FAQ></FAQ>
        </div>
      </div>

      <div>
        <div className=" mt-6">
          <p class="has-text-weight-bold is-size-2 has-text-centered has-text-grey-darker">
            It’s good to be loved! Our clients are not shy about expressing it.
          </p>
        </div>
        <FeedbackCarousel />
      </div>

      <div className="hero-foot">
        <Footer />
      </div>
    </>
  );
}
