import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Index.scss";
import Dropdown from "react-dropdown";
import DataTable from "react-data-table-component";
import "react-dropdown/style.css";
import BarLoader from "react-spinners/BarLoader";
import Loading from "../../common/Loading/Loading";
import Swal from "sweetalert2";

const PickRepositories = () => {
  let { user, repo } = useParams();
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState({});
  const [options, setOption] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [filterText, setFilterText] = useState("");
  const userId = sessionStorage.getItem("userId");
  const ghUsername = sessionStorage.getItem("ghUsername");
  const history = useHistory();

  const handleClickAdd = () => {
    setLoading(true);
    axios
      .post("http://localhost:8080/user/addRepo", {
        userId: userId,
        ghUser: user,
        repo: repo,
      })
      .then((res) => {
        history.push("/dashboard");
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
      });
  }, []);

  const defaultOption = ghUsername;
  const handleOnChange = (e) => {
    setData(repos[e.value]);
  };

  const filteredItems = data.filter(
    (item) =>
      item.name &&
      item.name.toString().toLowerCase().includes(filterText.toLowerCase())
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
                            className={`button is-large ${
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
        </>
      )}
    </>
  );
};

export default PickRepositories;
