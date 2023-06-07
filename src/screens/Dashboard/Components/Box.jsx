import React from "react";

const Box = ({ title,value }) => {
  return (
    <div class="card">
      <div class="card-content">
        <div class="content">
          <center>
            <h4 style={{ "font-weight": "normal" }}>{title}</h4>
            <p>{value}</p>
          </center>
        </div>
      </div>
    </div>
  );
};
export default Box;
