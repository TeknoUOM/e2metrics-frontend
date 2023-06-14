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
import { Link, useRouteMatch } from "react-router-dom";

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
}));

export default function ({ open, handleDrawerClose }) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const tab = url.split("/")[url.split("/").length - 1];

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
          <Link to={`/adminDashoard`}>
            <ListItem selected={true} button>
              <ListItemIcon>
                <OverviewIcon />
              </ListItemIcon>
              <ListItemText className="list-item-text" primary="Manage Users" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
}
