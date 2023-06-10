import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "../../common/Loading/Loading";
import LoginGithub from "react-login-github";
import Swal from "sweetalert2";
import "./Index.scss";

const AddRepositories = () => {
  const [loading, setLoading] = useState(false);
  const userId = sessionStorage.getItem("userId");
  const [authorized, setAuthorized] = useState("unknown");
  const history = useHistory();
  const onSuccess = (res) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/authorizeToGithub`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
          },
          code: res.code,
          userId: userId,
        }
      )
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("ghToken", response.data.res.res.access_token);
        history.push("/addRepositories/repos/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const onFailure = (res) => {
    console.log(res);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  };

  const connectToGithub = () => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUserGithubToken?userId=${userId}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.ghToken) {
          sessionStorage.setItem("ghToken", res.data.ghToken);
          axios
            .get("https://api.github.com/user", {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("ghToken")}`,
                Accept: "application/vnd.github.v3+json",
                "X-GitHub-Api-Version": "2022-11-28",
              },
            })
            .then((res) => {
              sessionStorage.setItem("ghUsername", res.data.login);
              history.push("/addRepositories/repos/");
            })
            .catch((error) => {
              console.log(error);
              setAuthorized("notAutherize");
            });
        } else {
          setAuthorized("notAuthorize");
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setAuthorized("notAuthorize");
        setLoading(false);
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
                  {authorized == "unknown" ? (
                    <button
                      className={`button is-medium is-light ${
                        loading ? "is-loading" : ""
                      } `}
                      onClick={connectToGithub}
                    >
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>GitHub</span>
                    </button>
                  ) : authorized == "notAuthorize" ? (
                    <LoginGithub
                      clientId="9e50af7dd2997cde127a"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      buttonText="Authorize"
                      className={`button gradient-button ${
                        loading ? "is-loading" : ""
                      }`}
                      valid={true}
                      scope="repo"
                    />
                  ) : null}
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
