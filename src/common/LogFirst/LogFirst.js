import { useAuthContext } from "@asgardeo/auth-react";
import React, { useEffect } from "react";

const LogFirst = () => {
  const { signIn } = useAuthContext();
  useEffect(() => {
    signIn();
  }, []);

  return (
    <>
      <div className="loader-wrapper is-active">
        <div className="loader is-loading"></div>
        <p style={{ fontSize: 20 }}>You Must Log First</p>
      </div>
    </>
  );
};

export default LogFirst;
