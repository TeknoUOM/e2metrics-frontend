import React from "react";
import BounceLoader from "react-spinners/BounceLoader";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loader-wrapper is-active">
      <BounceLoader color={"#3CE794"} />
    </div>
  );
};

export default Loading;
