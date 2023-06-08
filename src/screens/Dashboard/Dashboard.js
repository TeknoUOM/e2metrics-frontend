import { useAuthContext } from "@asgardeo/auth-react";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import Overview from "./Overview";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.scss";
import Swal from "sweetalert2";
import Comparison from "./Comparison";
import Forecast from "./Forecast";

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

const Dashboard = () => {
  const { getBasicUserInfo, signOut, state } = useAuthContext();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const role = sessionStorage.getItem("role");

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setLoading(true);
    state.isAuthenticated &&
      !role &&
      getBasicUserInfo()
        .then((res) => {
          sessionStorage.setItem("userId", res.sub);
          if (res.groups) {
            sessionStorage.setItem("role", res.groups[0]);
            setLoading(false);
          } else {
            history.push("/price");
            setLoading(false);
          }
        })
        .catch((e) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(e);
        });
    role && setLoading(false);
  }, [state.isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <div className={classes.root}>
              <CssBaseline />
              <Header
                handleDrawerToggle={handleDrawerToggle}
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
              <Sidebar
                handleDrawerClose={handleDrawerClose}
                open={open}
                tab={tab}
              />
              <main
                className={clsx(classes.content, {
                  [classes.contentShift]: open,
                })}
              >
                <div className={classes.drawerHeader} />
                <Switch>
                  <Route
                    path={`/dashboard/overview`}
                    component={Overview}
                  ></Route>
                  <Route path={`/dashboard/comparison`}>
                    <Comparison />
                  </Route>
                  <Route path={`/dashboard/forecast`}>
                    <Forecast />
                  </Route>
                </Switch>
              </main>
            </div>
          </ThemeProvider>
        </>
      )}
    </>
  );
};

export default Dashboard;
