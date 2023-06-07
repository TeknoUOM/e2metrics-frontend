import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, NavLink } from "react-router-dom";
import "./Index.scss";
import Dropdown from "react-dropdown";
import DataTable from "react-data-table-component";
import "react-dropdown/style.css";

const PickRepositories = () => {
  let { user, repo } = useParams();
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState({});
  const [options, setOption] = useState([]);
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");

  const handleClickAdd = () => {
    axios
      .post("http://localhost:8080/user/addRepo", {
        user: user,
        repo: repo,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`https://api.github.com/user/repos`, {
        headers: {
          Authorization: "Bearer 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",
          Accept: "application/vnd.github.v3+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res) => {
        //get owners without duplicates
        let repos = {};
        let owners = [...new Set(res.data.map((repo) => repo.owner.login))];
        setOption(owners);
        owners.forEach((owner) => {
          repos[owner] = res.data.filter((repo) => {
            return repo.owner.login == owner;
          });
        });
        setRepos(repos);
        setData(repos["MasterD98"]);
        console.log(repos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const defaultOption = "MasterD98";
  const handleOnChange = (e) => {
    setData(repos[e.value]);
  };

  const onRowClicked = (e) => {
    console.log(e);
  };

  const ghToken = getUserGithubToken();

  const getUserGithubToken = () => {
    axios
      .get(`/getUserGithubToken?userId=${userId}`)
      .then((res) => {
        return res.data.ghToken;
      })
      .catch((e) => {
        console.log(e);
      });
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
                      <li className={data.length > 0 ? "is-active" : ""}>
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
                      <div className="table-header">
                        <Dropdown
                          className="dropdown dropdown-trigger"
                          options={options}
                          value={defaultOption}
                          onChange={handleOnChange}
                          placeholder="Select an option"
                        />
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="text"
                            placeholder="Search repos"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa fa-search"></i>
                          </span>
                        </p>
                      </div>
                      <DataTable
                        columns={[{ name: "", selector: (row) => row.name }]}
                        data={data}
                        pagination={true}
                        paginationPerPage={5}
                        highlightOnHover
                        onRowClicked={onRowClicked}
                        pointerOnHover={true}
                        noHeader={true}
                        noTableHead
                      />
                    </>
                  ) : (
                    <>
                      <h1 className="title is-5 has-text-left ml-6">
                        {"Add " + data.full_name + " To E2metrics"}
                      </h1>
                      <button
                        className="button is-large"
                        style={{ backgroundColor: "#3CE794" }}
                        onClick={handleClickAdd}
                      >
                        <span className="icon is-medium">
                          <i className="fa fa-plus"></i>
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
