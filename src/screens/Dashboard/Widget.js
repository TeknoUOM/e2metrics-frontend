import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { CardContent, CardActions, Button } from "@material-ui/core";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import StatBox from "./StatBox";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
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

const widgetNames = {
  totalNumberOfLines: "Lines of Code",
  b: "Number Of Commits",
  c: "Pull Requests Count",
  d: "Opened Isses",
  e: "Weekly Commit Count",
  f: "Issue Fixing Frequency",
  g: "Bug Fix Ratio",
  h: "Fix Issue Lead Time",
  i: "Pull Request Frequency",
  j: "Pull Request Response Time",
  k: "Total Issues",
  l: "Weekly Pull Request Count",
  m: "Won't Fix Issue Ratio",
  n: "Pull Request Lead Time",
  o: "Issue Response Time",
};
export default function Widget({ id, onRemoveItem, value = 0, loading }) {
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
          title={10}
          icon={<ShowChartIcon />}
          loading={loading}
        />
      </div>
    </Card>
  );
}
