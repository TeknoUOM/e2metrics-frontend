import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: "auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
}));
const options = ["Boost", "tic-tac-toe"];
export default function SelectRepo({}) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className={classes.root}>
      <Button
        style={{
          backgroundColor: "#3ce794",
          borderRadius: "0.3rem",
          padding: "9.7px",
          WebkitBoxShadow: "0px 10px 20px 0px rgba(92, 210, 160, 0.46)",
          boxShadow: "0px 10px 20px 0px rgba(92, 210, 160, 0.46)",
        }}
        onClick={() => history.push("/addRepositories/start")}
      >
        + Add Repository
      </Button>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          bgcolor: "#3ce794",
          borderRadius: "0.3rem",
          padding: "0px",
          marginLeft: "8px",
          WebkitBoxShadow: "0px 10px 20px 0px rgba(92, 210, 160, 0.46)",
          boxShadow: "0px 10px 20px 0px rgba(92, 210, 160, 0.46)",
          fontWeight: 700,
        }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText secondary={options[selectedIndex] || "REPOSITORY"} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Card>
  );
}
