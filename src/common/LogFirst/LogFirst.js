import { useAuthContext } from "@asgardeo/auth-react";
import React, { useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LogFirst = () => {
  const { signIn } = useAuthContext();
  useEffect(() => {
    signIn();
  }, []);

  return (
    <>
      <div className="loader-wrapper is-active">
        <ScaleLoader color={"#3CE794"} />
        <p style={{ fontSize: 20 }}>You Must Log First</p>
      </div>
    </>
  );
};

export default LogFirst;
