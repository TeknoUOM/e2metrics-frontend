import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  popup: {
    padding: theme.spacing(2),
  },
}));

const widgetNames = {
  totalNumberOfLines: "Lines of Code Card",
  IssuesFixingFrequency: "Issues Fixing Frequency Card",
  BugFixRatio: "Bug Fix Ratio Card",
  CommitCount: "Commit Count Card",
  MeanLeadFixTime: "Mean Lead Fix Time Card",
  PullRequestFrequency: "Pull Request Frequency Card",
  WeeklyCommitCount: "Weekly Commit Count Card",
  OpenedIssuesCount: "Opened Issues Count Card",
  AllIssuesCount: "All Issues Count Card",
  WontFixIssuesRatio: "Wont Fix Issues Ratio Card",
  MeanPullRequestResponseTime: "Mean Pull Request Response Time Card",
  PullRequestCount: "Pull Request Count Card",
  MeanLeadTimeForPulls: "Pulls Mean Lead Time Card",
  ResponseTimeforIssue: "Issue Response Time Card",
  totalNumberOfLinesChart: "Lines of Code Card",
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

export default function AddList({
  items,
  onRemoveItem,
  onAddItem,
  originalItems,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (e) => {
    if (e.target.checked) {
      onAddItem(e.target.name);
    } else {
      onRemoveItem(e.target.name);
    }
  };

  return (
    <>
      <IconButton aria-label="add" onClick={handleClick} aria-describedby={id}>
        <AddCircleOutlineIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.popup}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Widgets</FormLabel>
            <FormGroup>
              {originalItems.map((i) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={items.includes(i)}
                      onChange={handleChange}
                      name={i}
                      style={{ color: "#A1E3CB" }}
                    />
                  }
                  label={widgetNames[i]}
                  key={i}
                />
              ))}
            </FormGroup>
          </FormControl>
        </div>
      </Popover>
    </>
  );
}
