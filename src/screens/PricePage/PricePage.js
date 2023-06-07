import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer/Footer";
import NavBar from "../../common/NavBar/NavBar";
import { Link } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import { roles } from "../../common/constant";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./PricePage.scss";
import Loading from "../../common/Loading/Loading";
import Swal from "sweetalert2";

const PricePage = () => {
  const { getBasicUserInfo, state, signIn } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const role = sessionStorage.getItem("role");
  const userId = sessionStorage.getItem("userId");
  const history = useHistory();

  const setRoleToFree = () => {
    setLoading(true);
    axios
      .put(
        `http://localhost:8080/user/changeUserGroup?userId=${userId}&groupName=${roles.FREE}`
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        sessionStorage.setItem("role", roles.FREE);
        history.push("/dashboard");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="hero is-fullheight">
          <div className="hero-head">
            <NavBar />
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              {state.isAuthenticated ? (
                role ? (
                  <h1 className="title is-2 mt-6">You can change your plan</h1>
                ) : (
                  <h1 className="title is-2 mt-6">
                    First,Must Choose your plan
                  </h1>
                )
              ) : (
                <h1 className="title is-2 mt-6">Choose your plan</h1>
              )}

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

                          {state.isAuthenticated ? (
                            role == roles.FREE ? (
                              <>
                                <button
                                  className="button is-large"
                                  style={{ backgroundColor: "#3CE794" }}
                                  disabled={true}
                                >
                                  Subscribed
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="button is-large"
                                  style={{ backgroundColor: "#3CE794" }}
                                  onClick={setRoleToFree}
                                >
                                  Change Plan
                                </button>
                              </>
                            )
                          ) : (
                            <button
                              className="button is-large"
                              style={{ backgroundColor: "#3CE794" }}
                              onClick={() => history.push("/LogFirst")}
                            >
                              Start With Free
                            </button>
                          )}
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

                          {state.isAuthenticated ? (
                            role == roles.BASIC ? (
                              <button
                                className="button is-large"
                                style={{ backgroundColor: "#3CE794" }}
                                disabled={true}
                              >
                                Subscribed
                              </button>
                            ) : (
                              <button
                                className="button is-large"
                                style={{ backgroundColor: "#3CE794" }}
                                onClick={() => {
                                  setLoading(true);
                                  history.push("/payment/Basic");
                                  setLoading(false);
                                }}
                              >
                                Change Plan
                              </button>
                            )
                          ) : (
                            <button
                              className="button is-large"
                              style={{ backgroundColor: "#3CE794" }}
                              onClick={() => {
                                history.push("/LogFirst");
                              }}
                            >
                              Start With Basic
                            </button>
                          )}
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
                            Unlimited Number of Repositories could add to
                            analyze
                          </li>
                          <li className="my-6">
                            Primitive, Complex and individual developer Metrics
                            allowed
                          </li>
                          <li className="my-6">Metrics forecast</li>
                          {state.isAuthenticated ? (
                            role == roles.PREMIUM ? (
                              <button
                                className="button is-large"
                                style={{ backgroundColor: "#3CE794" }}
                                disabled={true}
                              >
                                Subscribed
                              </button>
                            ) : (
                              <button
                                className="button is-large"
                                style={{ backgroundColor: "#3CE794" }}
                                onClick={() => {
                                  setLoading(true);
                                  history.push("/payment/Premium");
                                  setLoading(false);
                                }}
                              >
                                Change Plan
                              </button>
                            )
                          ) : (
                            <button
                              className="button is-large"
                              style={{ backgroundColor: "#3CE794" }}
                              onClick={() => history.push("/LogFirst")}
                            >
                              Start With Premium
                            </button>
                          )}
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
      )}
    </>
  );
};

export default PricePage;