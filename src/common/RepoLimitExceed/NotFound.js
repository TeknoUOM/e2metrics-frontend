import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

function RepoLimitExceed() {
  const history = useHistory();
  return (
    <>
      <div className="loader-wrapper is-active">
        <p style={{ fontSize: 20 }}>Repository Limit Exceeded For Your Plan </p>
        <Button
          variant="outlined"
          style={{
            margin: "10px",
          }}
          onClick={() => history.push("/dashboard/overview")}
        >
          Go Back
        </Button>
      </div>
    </>
  );
}

export default RepoLimitExceed;
