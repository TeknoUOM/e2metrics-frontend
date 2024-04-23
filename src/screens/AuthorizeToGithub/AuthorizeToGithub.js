import React from "react";
import LoginGithub from "react-login-github";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AuthorizeToGithub = () => {
  const userId = sessionStorage.getItem("userId");
  const onSuccess = (res) => {
    console.log(process.env.REACT_APP_BACKEND_API_KEY);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/authorizeToGithub`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
          code: res.code,
          userId: userId,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onFailure = (res) => {
    console.log(res);
  };
  return (
    <>
      <LoginGithub
        clientId="9e50af7dd2997cde127a"
        onSuccess={onSuccess}
        onFailure={onFailure}
        className="button"
        valid={true}
        scope="repo"
      />
    </>
  );
};

export default AuthorizeToGithub;
