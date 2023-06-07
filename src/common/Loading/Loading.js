import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loader-wrapper is-active">
      <div className="loader is-loading"></div>
    </div>
  );
};

export default Loading;
