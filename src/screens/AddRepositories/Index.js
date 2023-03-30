import React from "react";
import { Link } from "react-router-dom";
import "./Index.scss";

const AddRepositories = () => {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h1 className="title is-5">
                    Import an existing project from a Git repository
                  </h1>
                  <p>
                    Three easy steps to add your Repositories on{" "}
                    <b>E2metrics</b>.
                  </p>
                  <div className="tabs is-medium is-centered">
                    <ul>
                      <li className="is-active">
                        <a>Connect to GitHub</a>
                      </li>
                      <li>
                        <a>Pick a repository</a>
                      </li>
                      <li>
                        <a>Add To E2metrics</a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="title is-5 has-text-left ml-6">
                    Connect to Github
                  </h1>
                  <p>
                    Choose the Github where your git Repositories are hosted. We
                    run Metrics calculation daily and show you result.
                  </p>
                  <Link
                    className="button is-medium is-light"
                    to="/addRepositories/repos/"
                  >
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddRepositories;
