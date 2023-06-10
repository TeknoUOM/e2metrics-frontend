import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  return (
    <>
      <div className="loader-wrapper is-active">
        <p style={{ fontSize: 20 }}>Page Not Found</p>
        <Button
          variant="outlined"
          style={{
            margin: "10px",
          }}
          onClick={() => history.push("/")}
        >
          Go Back
        </Button>
      </div>
    </>
  );
}

export default NotFound;
