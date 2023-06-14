import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Index.scss";
import Dropdown from "react-dropdown";
import DataTable from "react-data-table-component";
import "react-dropdown/style.css";
import BarLoader from "react-spinners/BarLoader";
import Loading from "../../common/Loading/Loading";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Swal from "sweetalert2";
import RepoLimitExceed from "../../common/RepoLimitExceed/NotFound";

const PickRepositories = () => {
  let { user, repo } = useParams();
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState({});
  const [options, setOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [filterText, setFilterText] = useState("");
  const userId = sessionStorage.getItem("userId");
  const role = sessionStorage.getItem("role");
  const ghUsername = sessionStorage.getItem("ghUsername");
  const [existingRepos, setExistingRepos] = useState([]);
  const [repoLimitExceed, setRepoLimitExceed] = useState(false);
  const history = useHistory();

  const handleClickAdd = () => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/addRepo`, {
        userId: userId,
        ghUser: user,
        repo: repo,
        headers: {
          "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        history.push("/dashboard/overview");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUserAllRepos?userId=${userId}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (role == "Free" && res.data.length > 1) {
          setRepoLimitExceed(true);
        }
        if (role == "Basic" && res.data.length > 9) {
          setRepoLimitExceed(true);
        }
        setExistingRepos(res.data.map((repo) => repo.reponame));
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://api.github.com/user/repos`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ghToken")}`,
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
        setData(repos[ghUsername]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const defaultOption = ghUsername;
  const handleOnChange = (e) => {
    setData(repos[e.value]);
  };

  const filteredItems = data.filter(
    (item) =>
      item.name &&
      item.name.toString().toLowerCase().includes(filterText.toLowerCase()) &&
      !existingRepos.includes(item.name && item.name.toString())
  );

  const onRowClicked = (e) => {
    setRedirect(true);
    setTimeout(() => {
      history.push(`${e.owner.login}/${e.name}`);
      setRedirect(false);
    }, 300);
  };

  return (
    <>
      {redirect ? (
        <Loading />
      ) : (
        <>
          {repoLimitExceed ? (
            <RepoLimitExceed />
          ) : (
            <section className="hero is-fullheight">
              <div className="hero-body">
                <IconButton
                  variant="contained"
                  sx={{ position: "fixed", top: 0, left: 0, zIndex: 2000 }}
                  onClick={() => history.push("/addRepositories/start")}
                >
                  <KeyboardBackspaceIcon fontSize="large" />
                </IconButton>
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
                              <b>E2metrics</b>. When you push to Git,We run
                              Metrics calculation daily and show you result.
                            </p>
                            <>
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
                                    value={filterText}
                                    onChange={(e) =>
                                      setFilterText(e.target.value)
                                    }
                                  />
                                  <span className="icon is-small is-left">
                                    <i className="fas fa fa-search"></i>
                                  </span>
                                </p>
                              </div>
                              <hr className="m-auto" />
                              <DataTable
                                className="table"
                                columns={[
                                  {
                                    name: "",
                                    selector: (row) => row.name,
                                  },
                                ]}
                                data={filteredItems}
                                pagination={true}
                                paginationPerPage={5}
                                highlightOnHover
                                onRowClicked={onRowClicked}
                                pointerOnHover={true}
                                noHeader={true}
                                noTableHead
                                progressPending={loading}
                                progressComponent={
                                  <BarLoader color={"#3CE794"} />
                                }
                              />
                            </>
                          </>
                        ) : (
                          <>
                            <h1 className="title is-5 has-text-left ml-6">
                              {`Add ${user}/${repo} To E2metrics`}
                            </h1>
                            <button
                              className={`button gradient-button ${
                                loading ? "is-loading" : ""
                              }`}
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
          )}
        </>
      )}
    </>
  );
};

export default PickRepositories;
