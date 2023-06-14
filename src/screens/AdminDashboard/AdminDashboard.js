import { useAuthContext } from "@asgardeo/auth-react";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import ManageUser from "./ManageUser";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

const AdminDashboard = () => {
  const { getBasicUserInfo, signOut, state } = useAuthContext();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const role = sessionStorage.getItem("role");
  const userId = sessionStorage.getItem("userId");
  const [editLayout, setEditLayout] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <div className={classes.root}>
              <CssBaseline />
              <Header handleDrawerToggle={handleDrawerToggle} />
              <Sidebar
                handleDrawerClose={handleDrawerClose}
                open={open}
                editLayout={editLayout}
                setEditLayout={setEditLayout}
              />
              <main
                className={clsx(classes.content, {
                  [classes.contentShift]: open,
                })}
              >
                <div className={classes.drawerHeader} />
                <ManageUser />
              </main>
            </div>
          </ThemeProvider>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
