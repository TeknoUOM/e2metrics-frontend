import React, { useEffect, useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import TopBar from "../TopBar";
import WidgetChart from "./WidgetChart";
import SelectRepos from "./SelectRepos";
import AskToAddRepo from "../../../common/AskToAddRepo/AskToAddRepo";
import axios from "axios";

const originalItems = [
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
      i: "totalNumberOfLinesChart",
      x: 0,
      y: 0,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "IssuesFixingFrequencyChart",
      x: 4,
      y: 0,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "BugFixRatioChart",
      x: 8,
      y: 0,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "CommitCountChart",
      x: 0,
      y: 5,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "MeanLeadFixTimeChart",
      x: 4,
      y: 5,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "PullRequestFrequencyChart",
      x: 8,
      y: 5,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "WeeklyCommitCountChart",
      x: 0,
      y: 10,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "OpenedIssuesCountChart",
      x: 4,
      y: 10,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "AllIssuesCountChart",
      x: 8,
      y: 10,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "WontFixIssuesRatioChart",
      x: 0,
      y: 15,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "MeanPullRequestResponseTimeChart",
      x: 4,
      y: 15,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "PullRequestCountChart",
      x: 8,
      y: 15,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "MeanLeadTimeForPullsChart",
      x: 0,
      y: 20,
      w: 4,
      h: 5,
      isResizable: false,
    },
    {
      i: "ResponseTimeforIssueChart",
      x: 4,
      y: 20,
      w: 4,
      h: 5,
      isResizable: false,
    },
  ],
};
function Content({ size: { width }, editLayout }) {
  const [chartData2, setChartData2] = useState([]);
  const [repo1, setRepo1] = useState(null);
  const [repo2, setRepo2] = useState(null);
  const [noRepo, setNoRepo] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(originalItems);
  const userId = sessionStorage.getItem("userId");
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || initialLayouts
  );
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
    let repo2Details = repo2 && repo2.split("/");
    repo2 &&
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_CHOREO_URL}/metrics/getRepoLatestMonthlyPerfomance?userId=${userId}&ownername=${repo2Details[0]}&reponame=${repo2Details[1]}`
        )
        .then((res) => {
          setChartData2(res.data.reverse());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  }, [repo2]);

  useEffect(() => {
    setLoading(true);
    let repo1Details = repo1 && repo1.split("/");
    repo1 &&
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_CHOREO_URL}/metrics/getRepoLatestMonthlyPerfomance?userId=${userId}&ownername=${repo1Details[0]}&reponame=${repo1Details[1]}`
        )
        .then((res) => {
          setChartData(res.data.reverse());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  }, [repo1]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUserAllRepos?userId=${userId}`
      )
      .then((res) => {
        setRepos(res.data);
        if (res.data.length > 1) {
          setNoRepo(false);
          setRepo1(`${res.data[0].ownername}/${res.data[0].reponame}`);
          setRepo2(`${res.data[1].ownername}/${res.data[1].reponame}`);
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
            <SelectRepos
              repos={repos}
              setRepo1={setRepo1}
              setRepo2={setRepo2}
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
                    data2={
                      chartData2 &&
                      chartData2.map((day) => {
                        return { [day.Date]: day[key.replace("Chart", "")] };
                      })
                    }
                    repo1={repo1}
                    repo2={repo2}
                  />
                </>
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
    ls = JSON.parse(sessionStorage.getItem("rgl-8-comparison")) || {};
  } catch (e) {}
  return ls[key];
}

function saveToLS(key, value) {
  sessionStorage.setItem(
    "rgl-8-comparison",
    JSON.stringify({
      [key]: value,
    })
  );
}
