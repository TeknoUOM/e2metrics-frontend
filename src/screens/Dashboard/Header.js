import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthContext } from "@asgardeo/auth-react";
import { useHistory } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  rightIcons: {
    marginLeft: theme.spacing(0.5),
  },
  spacer: {
    flexGrow: 1,
  },
}));

export default function Header({ handleDrawerToggle }) {
  const classes = useStyles();
  const { signOut } = useAuthContext();
  const [userAlerts, setUserAlerts] = useState([]);
  const [alertCount, setAlertCount] = useState(0);
  const userId = sessionStorage.getItem("userId");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorElNotification, setAnchorElNotification] = useState(null);
  const openNotification = Boolean(anchorElNotification);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUserAlerts?userId=${userId}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAlertCount(res.data.length);
        setUserAlerts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotificationClick = (event) => {
    setAnchorElNotification(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNotificationClose = () => {
    setAlertCount(0);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/setUserAlertsIsShowed`,
        {
          userId: userId,
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setAnchorElNotification(null);
  };

  const handleLogout = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/changeUserLayout`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
          overviewlayout: sessionStorage.getItem("rgl-8-overview"),
          comparisonLayout: sessionStorage.getItem("rgl-8-comparison"),
          forecastLayout: sessionStorage.getItem("rgl-8-forecast"),
          userId: userId,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("rgl-8-overview");
    sessionStorage.removeItem("rgl-8-comparison");
    sessionStorage.removeItem("rgl-8-forecast");
    signOut();
  };

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
        <div className={classes.spacer} />

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          aria-controls={openNotification ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openNotification ? "true" : undefined}
          className={classes.rightIcons}
          onClick={handleNotificationClick}
        >
          <Badge badgeContent={alertCount | 0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorElNotification}
          open={openNotification}
          onClose={handleNotificationClose}
          onClick={handleNotificationClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {userAlerts.map((alert) => (
            <MenuItem disabled onClick={handleNotificationClose}>
              {`${alert.DateTime} - ${alert.Alert}`}
            </MenuItem>
          ))}
          {userAlerts.length == 0 ? (
            <MenuItem disabled onClick={handleNotificationClose}>
              no any notifications
            </MenuItem>
          ) : null}
        </Menu>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => history.push("/settings/mydetails")}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
