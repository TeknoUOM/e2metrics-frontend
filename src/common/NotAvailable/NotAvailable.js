import React from "react";
import BarLoader from "react-spinners/BarLoader";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const NotAvailable = ({ role = "Free" }) => {
  const history = useHistory();
  return (
    <>
      <div className="loader-wrapper is-active">
        <BarLoader color={"#3CE794"} />
        <p style={{ fontSize: 20 }}>
          This feature is not Available for
          <b className="is-danger"> {role} Plan</b>
        </p>
        <Button
          variant="outlined"
          style={{
            margin: "10px",
          }}
          onClick={() => history.push("/dashboard/overview")}
        >
          Back to Overview
        </Button>
      </div>
    </>
  );
};

export default NotAvailable;
