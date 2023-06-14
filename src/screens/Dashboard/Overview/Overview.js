import React, { useEffect, useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import TopBar from "./TopBar";
import WidgetCard from "./WidgetCard";
import WidgetChart from "./WidgetChart";
import SelectRepo from "./SelectRepo";
import axios from "axios";
import AskToAddRepo from "../../../common/AskToAddRepo/AskToAddRepo";
import { useAuthContext } from "@asgardeo/auth-react";
import { useHistory } from "react-router-dom";

const originalItems = [
  "totalNumberOfLines",
  "IssuesFixingFrequency",
  "BugFixRatio",
  "CommitCount",
  "MeanLeadFixTime",
  "PullRequestFrequency",
  "WeeklyCommitCount",
  "OpenedIssuesCount",
  "AllIssuesCount",
  "WontFixIssuesRatio",
  "MeanPullRequestResponseTime",
  "PullRequestCount",
  "MeanLeadTimeForPulls",
  "ResponseTimeforIssue",
  "totalNumberOfLinesChart",
  "IssuesFixingFrequencyChart",
  "BugFixRatioChart",
  "CommitCountChart",
  "MeanLeadFixTimeChart",
  "PullRequestFrequencyChart",
  "WeeklyCommitCountChart",
  "OpenedIssuesCountChart",
  "AllIssuesCountChart",
  "WontFixIssuesRatioChart",
  "MeanPullRequestResponseTimeChart",
  "PullRequestCountChart",
  "MeanLeadTimeForPullsChart",
  "ResponseTimeforIssueChart",
];

const originalItemsColors = {
  totalNumberOfLines: "#BAEDBD",
  IssuesFixingFrequency: "#A1E3CB",
  BugFixRatio: "#BAEDBD",
  CommitCount: "#A1E3CB",
  MeanLeadFixTime: "#BAEDBD",
  PullRequestFrequency: "#A1E3CB",
  WeeklyCommitCount: "#BAEDBD",
  OpenedIssuesCount: "#A1E3CB",
  AllIssuesCount: "#BAEDBD",
  WontFixIssuesRatio: "#A1E3CB",
  MeanPullRequestResponseTime: "#BAEDBD",
  PullRequestCount: "#A1E3CB",
  MeanLeadTimeForPulls: "#BAEDBD",
  ResponseTimeforIssue: "#A1E3CB",
  totalNumberOfLinesChart: "#F7F9FB",
  IssuesFixingFrequencyChart: "#F7F9FB",
  BugFixRatioChart: "#F7F9FB",
  CommitCountChart: "#F7F9FB",
  MeanLeadFixTimeChart: "#F7F9FB",
  PullRequestFrequencyChart: "#F7F9FB",
  WeeklyCommitCountChart: "#F7F9FB",
  OpenedIssuesCountChart: "#F7F9FB",
  AllIssuesCountChart: "#F7F9FB",
  WontFixIssuesRatioChart: "#F7F9FB",
  MeanPullRequestResponseTimeChart: "#F7F9FB",
  PullRequestCountChart: "#F7F9FB",
  MeanLeadTimeForPullsChart: "#F7F9FB",
  ResponseTimeforIssueChart: "#F7F9FB",
};

const initialLayouts = {
  lg: [
    {
      i: "totalNumberOfLines",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      isResizable: false,
      color: "#BAEDBD",
    },
    {
      i: "IssuesFixingFrequency",
      x: 2,
      y: 0,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "BugFixRatio",
      x: 4,
      y: 0,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "CommitCount",
      x: 6,
      y: 0,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "MeanLeadFixTime",
      x: 8,
      y: 0,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "PullRequestFrequency",
      x: 10,
      y: 0,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "WeeklyCommitCount",
      x: 0,
      y: 2,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "OpenedIssuesCount",
      x: 2,
      y: 2,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "AllIssuesCount",
      x: 4,
      y: 2,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "WontFixIssuesRatio",
      x: 6,
      y: 2,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "MeanPullRequestResponseTime",
      x: 8,
      y: 2,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "PullRequestCount",
      x: 10,
      y: 2,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "MeanLeadTimeForPulls",
      x: 0,
      y: 4,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "ResponseTimeforIssue",
      x: 2,
      y: 4,
      w: 2,
      h: 2,
      isResizable: false,
    },
    {
      i: "totalNumberOfLinesChart",
      x: 4,
      y: 4,
      w: 4,
      h: 5,
      isResizable: false,
      color: "#BAEDBD",
    },
    {
      i: "IssuesFixingFrequencyChart",
      x: 8,
      y: 4,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "BugFixRatioChart",
      x: 0,
      y: 6,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "CommitCountChart",
      x: 4,
      y: 6,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "MeanLeadFixTimeChart",
      x: 8,
      y: 6,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "PullRequestFrequencyChart",
      x: 0,
      y: 9,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "WeeklyCommitCountChart",
      x: 4,
      y: 9,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "OpenedIssuesCountChart",
      x: 8,
      y: 9,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "AllIssuesCountChart",
      x: 0,
      y: 12,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "WontFixIssuesRatioChart",
      x: 4,
      y: 12,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "MeanPullRequestResponseTimeChart",
      x: 8,
      y: 12,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "PullRequestCountChart",
      x: 0,
      y: 15,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "MeanLeadTimeForPullsChart",
      x: 4,
      y: 15,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "ResponseTimeforIssueChart",
      x: 8,
      y: 15,
      w: 4,
      h: 5,
      isResizable: false,
    },
  ],
};
function Content({ size: { width }, editLayout }) {
  const [cardData, setCardData] = useState(null);
  const [reponame, setReponame] = useState(null);
  const [noRepo, setNoRepo] = useState(false);
  const [ownername, setOwnername] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(originalItems);
  const userId = sessionStorage.getItem("userId");
  const history = useHistory();
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || initialLayouts
  );
  const { getBasicUserInfo } = useAuthContext();
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
  };
  const onAddItem = (itemId) => {
    console.log(itemId);
    setItems([...items, itemId]);
  };

  useEffect(() => {
    setLoading(true);
    ownername &&
      reponame &&
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_CHOREO_URL}/metrics/getRepoLatestDailyPerfomance?userId=${userId}&ownername=${ownername}&reponame=${reponame}`,
          {
            headers: {
              "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setCardData(res.data[0]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  }, [reponame, ownername]);

  useEffect(() => {
    setLoading(true);
    ownername &&
      reponame &&
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_CHOREO_URL}/metrics/getRepoLatestWeeklyPerfomance?userId=${userId}&ownername=${ownername}&reponame=${reponame}`,
          {
            headers: {
              "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setChartData(res.data.reverse());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  }, [reponame, ownername]);

  useEffect(() => {
    setLoading(true);
    getBasicUserInfo()
      .then((res) => {
        if (res.groups[0] == "Admin") {
          history.push("/admindashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUserAllRepos?userId=${userId}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setRepos(res.data);
        if (res.data.length > 0) {
          setNoRepo(false);
          setOwnername(res.data[0].ownername);
          setReponame(res.data[0].reponame);
        } else {
          setNoRepo(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!noRepo ? (
        <>
          {editLayout ? (
            <TopBar
              onLayoutSave={onLayoutSave}
              items={items}
              onRemoveItem={onRemoveItem}
              onAddItem={onAddItem}
              originalItems={originalItems}
            />
          ) : (
            <SelectRepo
              repos={repos}
              setOwnername={setOwnername}
              setReponame={setReponame}
            />
          )}
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={60}
            width={width}
            onLayoutChange={onLayoutChange}
            style={{ minHeight: "80vh" }}
          >
            {items.map((key) => (
              <div
                key={key}
                className="widget"
                data-grid={
                  initialLayouts.lg.filter((element) => element.i == key)[0]
                }
              >
                {key.includes("Chart") ? (
                  <>
                    <WidgetChart
                      id={key}
                      onRemoveItem={onRemoveItem}
                      loading={loading}
                      color={originalItemsColors[key]}
                      data={
                        chartData &&
                        chartData.map((day) => {
                          return { [day.Date]: day[key.replace("Chart", "")] };
                        })
                      }
                    />
                  </>
                ) : (
                  <WidgetCard
                    id={key}
                    onRemoveItem={onRemoveItem}
                    loading={loading}
                    data={cardData}
                    color={originalItemsColors[key]}
                  />
                )}
              </div>
            ))}
          </ResponsiveGridLayout>
        </>
      ) : (
        <>
          <AskToAddRepo />
        </>
      )}
    </>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);

function getFromLS(key) {
  let ls = {};
  try {
    ls = JSON.parse(sessionStorage.getItem("rgl-8-overview")) || {};
  } catch (e) {}
  return ls[key];
}

function saveToLS(key, value) {
  sessionStorage.setItem(
    "rgl-8-overview",
    JSON.stringify({
      [key]: value,
    })
  );
}
