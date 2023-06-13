import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { MoonLoader } from "react-spinners";
Chart.register(CategoryScale);

const widgetNames = {
  totalNumberOfLinesChart: "Lines of Code Chart",
  IssuesFixingFrequencyChart: "Issues Fixing Frequency Chart",
  BugFixRatioChart: "Bug Fix Ratio Chart",
  CommitCountChart: "Commit Count Chart",
  MeanLeadFixTimeChart: "Mean Lead Fix Time Chart",
  PullRequestFrequencyChart: "Pull Request Frequency Chart",
  WeeklyCommitCountChart: "Weekly Commit Count Chart",
  OpenedIssuesCountChart: "Opened Issues Count Chart",
  AllIssuesCountChart: "All Issues Count Chart",
  WontFixIssuesRatioChart: "Wont Fix Issues Ratio Chart",
  MeanPullRequestResponseTimeChart: "Mean Pull Request Response Time Chart",
  PullRequestCountChart: "Pull Request Count Chart",
  MeanLeadTimeForPullsChart: "Pulls Mean Lead Time Chart",
  ResponseTimeforIssueChart: "Issue Response Time Chart",
};
export default function Widget({
  id,
  onRemoveItem,
  loading,
  data = {},
  color,
}) {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: color,
      borderRadius: "10px",
    },
    header: {
      display: "flex",
      alignItems: "center",
      margin: "0.5rem",
    },
    spacer: {
      flexGrow: 1,
    },
    body: {
      flexGrow: 1,
    },
  });

  const classes = useStyles();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: widgetNames[id],
        customCanvasBackgroundColor: {
          color: color,
        },
      },
    },
  };
  const labels = data.map((row) => Object.keys(row));
  const tempData = {
    labels,
    datasets: [
      {
        label: widgetNames[id].replace("Chart", ""),
        data: data.map((row, index) => row[labels[index]]),
        borderColor: "rgb(60,231,148)",
        backgroundColor: "rgba(60,231,148, 0.5)",
      },
    ],
  };

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <div className={classes.spacer} />
        <IconButton
          style={{ padding: "0px" }}
          aria-label="delete"
          onClick={() => onRemoveItem(id)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>

      {loading ? (
        <MoonLoader color={"#3CE794"} size={25} speedMultiplier={1} />
      ) : (
        <div className={classes.body}>
          <Line options={options} labels={labels} data={tempData} />
        </div>
      )}
    </Card>
  );
}