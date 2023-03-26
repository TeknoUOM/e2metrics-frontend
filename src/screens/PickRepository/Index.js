import React, { useEffect } from "react";
import { Link, useParams, useLocation, NavLink } from "react-router-dom";
import "./Index.scss";

const PickRepositories = () => {
  let { user, repo } = useParams();
  const location = useLocation();
  const data = [
    {
      id: 1,
      user: "MasterD98",
      repo: "simplefolio",
    },
    {
      id: 2,
      user: "MasterD98",
      repo: "FinalYear",
    },
  ];

  const handleClickAdd = () => {
    console.log("done");
  };

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
                  <div
                    className="tabs is-medium is-centered"
                    style={{ borderBottomColor: "green" }}
                  >
                    <ul>
                      <li className="is-active">
                        <a>Connect to GitHub</a>
                      </li>
                      <li className="is-active">
                        <a>Pick a repository</a>
                      </li>
                      <li className={user && repo ? "is-active" : ""}>
                        <a>Add To E2metrics</a>
                      </li>
                    </ul>
                  </div>
                  {!(user && repo) ? (
                    <>
                      <h1 className="title is-5 has-text-left ml-6">
                        Pick a repository from GitHub
                      </h1>
                      <p>
                        Choose the repository you want to link to{" "}
                        <b>E2metrics</b>. When you push to Git,We run Metrics
                        calculation daily and show you result.
                      </p>
                      <table class="table is-hoverable">
                        <thead className="table-header">
                          <div class="dropdown">
                            <div class="dropdown-trigger">
                              <button class="button" style={{ border: "none" }}>
                                <span className="icon">
                                  <i className="fab fa-github"></i>
                                </span>
                                <span>{data[0].user}</span>
                                <span class="icon is-small">
                                  <i
                                    class="fas fa-angle-down"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </button>
                            </div>
                            <div
                              class="dropdown-menu"
                              id="dropdown-menu"
                              role="menu"
                            >
                              <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                  Dropdown item
                                </a>
                              </div>
                            </div>
                          </div>
                          <p class="control has-icons-left">
                            <input
                              class="input"
                              type="text"
                              placeholder="Search repos"
                            />
                            <span class="icon is-small is-left">
                              <i class="fas fa fa-search"></i>
                            </span>
                          </p>
                        </thead>
                        <hr className="m-2" />
                        <tbody className="">
                          {data.map((repo) => {
                            return (
                              <tr>
                                <td>
                                  <NavLink
                                    to={
                                      location.pathname +
                                      "/" +
                                      repo.user +
                                      "/" +
                                      repo.repo
                                    }
                                  >
                                    <span className="icon">
                                      <i className="fab fa-github"></i>
                                    </span>
                                    {repo.user}/<b>{repo.repo}</b>
                                  </NavLink>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </>
                  ) : (
                    <>
                      <h1 className="title is-5 has-text-left ml-6">
                        {"Add " + user + "/" + repo + " To E2metrics"}
                      </h1>
                      <button
                        class="button is-large"
                        style={{ backgroundColor: "#3CE794" }}
                        onClick={handleClickAdd}
                      >
                        <span class="icon is-medium">
                          <i class="fa fa-plus"></i>
                        </span>
                        <span>Calculate Metrics</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickRepositories;
