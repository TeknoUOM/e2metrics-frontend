import React from "react";
import BarLoader from "react-spinners/BarLoader";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const UnderConstruction = ({ feature = "This", backButton = false }) => {
  const history = useHistory();
  return (
    <>
      <div className="loader-wrapper is-active">
        <BarLoader color={"#3CE794"} />
        <p style={{ fontSize: 20 }}>
          <span style={{ color: "#3ce794", fontWeight: "bolder" }}>
            {feature}
          </span>{" "}
          Feature is Currently <b className="is-danger">Under Construction</b>
        </p>
        {backButton ? (
          <Button
            variant="outlined"
            style={{
              margin: "10px",
            }}
            onClick={() => history.push("/dashboard/overview")}
          >
            Go Back
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default UnderConstruction;
