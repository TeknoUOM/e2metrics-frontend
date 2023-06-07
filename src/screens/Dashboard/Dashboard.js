import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Box from "./Components/Box";
import axios from "axios";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import "./Dashboard.css";
import { useAuthContext } from "@asgardeo/auth-react";

function Dashboard() {
  const { state } = useAuthContext();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [data, setData] = useState({
    totalNumberOfLines: 0,
    BugFixRatio: 0,
    CommitCount: 0,
    MeanLeadFixTime: 0,
    IssuesFixingFrequency: 0,
    PullRequestFrequency: 0,
  });
  useEffect(() => {
    axios
      .get("http://localhost:8080/primitive/getPerfomances")
      .then((res) => {
        console.log(res.data[res.data.length - 1]);
        setData(res.data[res.data.length - 1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar
            className="sidebar"
            isSidebar={isSidebar}git
            username={state.displayName}
          />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />

            <div class="columns color">
              <div class="column">
                <Box
                  title={"Number of Lines"}
                  value={data.totalNumberOfLines}
                />
              </div>

              <div class="column">
                <Box title={"Bug Fix Ratio"} value={data.BugFixRatio} />
              </div>
              <div class="column">
                <Box title={"Commit Count"} value={data.CommitCount} />
              </div>
              <div class="column">
                <Box
                  title={"Mean Lead Fix Time"}
                  value={data.MeanLeadFixTime}
                />
              </div>
            </div>

            <div class="columns color">
              <div class="column">
                <Box
                  title={"Pull Request Frequency"}
                  value={data.PullRequestFrequency}
                />
              </div>

              <div class="column">
                <Box
                  title={"Issue Fixing Frequency"}
                  value={data.IssuesFixingFrequencyio}
                />
              </div>
              <div class="column">
                <Box title={"Total Issues"} />
              </div>
              <div class="column">
                <Box title={"Total issues"} />
              </div>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dashboard;
