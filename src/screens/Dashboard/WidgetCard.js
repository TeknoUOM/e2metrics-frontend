import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { CardContent, CardActions, Button } from "@material-ui/core";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import StatBox from "./StatBox";

const widgetNames = {
  totalNumberOfLines: "Lines of Code",
  IssuesFixingFrequency: "Issues Fixing Frequency",
  BugFixRatio: "Bug Fix Ratio",
  CommitCount: "Commit Count",
  MeanLeadFixTime: "Mean Lead Fix Time",
  PullRequestFrequency: "Pull Request Frequency",
  WeeklyCommitCount: "Weekly Commit Count",
  OpenedIssuesCount: "Opened Issues Count",
  AllIssuesCount: "All Issues Count",
  WontFixIssuesRatio: "Wont Fix Issues Ratio",
  MeanPullRequestResponseTime: "Mean Pull Request Response Time",
  PullRequestCount: "Pull Request Count",
  MeanLeadTimeForPulls: "Pulls Mean Lead Time",
  ResponseTimeforIssue: "Issue Response Time",
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

      <div className={classes.body}>
        <StatBox
          subtitle={widgetNames[id]}
          value={data && data[id]}
          icon={<ShowChartIcon />}
          loading={loading}
        />
      </div>
    </Card>
  );
}
