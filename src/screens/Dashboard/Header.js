import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthContext } from "@asgardeo/auth-react";

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

export default function Header({
  handleDrawerToggle,
  toggleDarkMode,
  darkMode,
}) {
  const classes = useStyles();
  const { signOut } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userId");
    global.localStorage.removeItem("rgl-8-overview");
    global.localStorage.removeItem("rgl-8-comparison");
    global.localStorage.removeItem("rgl-8-forecast");
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
          onClick={toggleDarkMode}
          edge="start"
          className={classes.rightIcons}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
        >
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
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
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            {" "}
            <ManageAccountsIcon className="menu-icon" />
            Account
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <LogoutIcon className="menu-icon" />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
