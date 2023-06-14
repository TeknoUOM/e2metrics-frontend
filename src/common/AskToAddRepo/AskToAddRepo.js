import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

function AskToAddRepo() {
  const history = useHistory();
  return (
    <>
      <div className="loader-wrapper is-active">
        <p style={{ fontSize: 20 }}>No Repositories Found</p>
        <Button
          variant="outlined"
          color="success"
          style={{
            margin: "10px",
          }}
          onClick={() => history.push("/addRepositories/start")}
        >
          Add Repository
        </Button>
      </div>
    </>
  );
}

export default AskToAddRepo;
