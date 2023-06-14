import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import OverviewIcon from "@mui/icons-material/Assessment";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CompareIcon from "@mui/icons-material/Compare";
import ForecastIcon from "@mui/icons-material/Timeline";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  bottomPush: {
    position: "fixed",
    bottom: 10,
    textAlign: "center",
    paddingBottom: 10,
  },
}));

export default function ({
  open,
  handleDrawerClose,
  editLayout,
  setEditLayout,
}) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const tab = url.split("/")[url.split("/").length - 1];

  const handleClick = () => {
    setEditLayout(!editLayout);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className="">
        <List>
          <Link to={`/dashboard/overview`}>
            <ListItem selected={tab == "overview"} button>
              <ListItemIcon>
                <OverviewIcon />
              </ListItemIcon>
              <ListItemText className="list-item-text" primary="Overview" />
            </ListItem>
          </Link>
          <Link to={`/dashboard/comparison`}>
            <ListItem selected={tab == "comparison"} button>
              <ListItemIcon>
                <CompareIcon />
              </ListItemIcon>
              <ListItemText className="list-item-text" primary="Comparison" />
            </ListItem>
          </Link>

          <Link to={"/dashboard/forecast"}>
            <ListItem selected={tab == "forecast"} button>
              <ListItemIcon>
                <ForecastIcon />
              </ListItemIcon>
              <ListItemText className="list-item-text" primary="Forecast" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={"/settings/mydetails"}>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText className="list-item-text" primary="Settings" />
            </ListItem>
          </Link>
        </List>
      </div>
      <div className={classes.bottomPush}>
        <Button
          className="button gradient-button"
          onClick={handleClick}
          style={{ left: editLayout ? 60 : 40 }}
        >
          {editLayout ? "Done" : "Edit Layout"}
        </Button>
      </div>
    </Drawer>
  );
}
