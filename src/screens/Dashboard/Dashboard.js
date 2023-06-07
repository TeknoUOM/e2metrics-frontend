import { useAuthContext } from "@asgardeo/auth-react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import Swal from "sweetalert2";
const Dashboard = () => {
  const { getBasicUserInfo, signOut, state } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const role = sessionStorage.getItem("role");

  useEffect(() => {
    setLoading(true);
    state.isAuthenticated &&
      !role &&
      getBasicUserInfo()
        .then((res) => {
          sessionStorage.setItem("userId", res.sub);
          if (res.groups) {
            sessionStorage.setItem("role", res.groups[0]);
            setLoading(false);
          } else {
            history.push("/price");
            setLoading(false);
          }
        })
        .catch((e) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(e);
        });
    role && setLoading(false);
  }, [state.isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Dashboard</h1>
          <p>hi</p>
          <button
            className="button is-danger"
            onClick={() => {
              sessionStorage.removeItem("role");
              sessionStorage.removeItem("userId");
              signOut();
            }}
          >
            signOut
          </button>
        </>
      )}
    </>
  );
};

export default Dashboard;
