import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { CardContent, CardActions, Button } from "@material-ui/core";

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
  a: "A",
  b: "B",
  c: "C",
  d: "D",
};
export default function Widget({ id, onRemoveItem }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography sx={{ fontSize: 14 }} variant="h5" color="text.secondary">
          Commit count
        </Typography>
        <div className={classes.spacer} />
        <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>

      <div className={classes.body}>
        <CardContent>
          <Typography variant="h5" component="div">
            aa
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
