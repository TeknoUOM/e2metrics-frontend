import React from "react";
import LoginGithub from "react-login-github";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AuthorizeToGithub = () => {
  const history = useHistory();
  const userId = sessionStorage.getItem("userId");
  const onSuccess = (res) => {
    console.log(res);
    axios
      .post("http://localhost:8080/user/authorizeToGithub", {
        code: res.code,
        userId: userId,
      })
      .then((response) => {
        history.push("/dashboard");
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
        buttonText="Authorize To Github"
        className="button"
        valid={true}
        scope="repo"
      />
    </>
  );
};

export default AuthorizeToGithub;
