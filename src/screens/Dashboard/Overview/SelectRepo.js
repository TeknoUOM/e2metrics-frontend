import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SelectRepo.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: "auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover:not(.Mui-disabled)": {
      cursor: "pointer",
    },
  },
}));

export default function SelectRepo({ repos = [], setReponame, setOwnername }) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const userId = sessionStorage.getItem("userId");
  const open = Boolean(anchorEl);

  const removeRepo = () => {
    repos &&
      axios
        .delete(`${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/removeRepo`, {
          userId: userId,
          ghUser: repos[selectedIndex].ownername,
          repo: repos[selectedIndex].reponame,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setReponame(repos[index].reponame);
    setOwnername(repos[index].ownername);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className={classes.root}>
      <div>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: "background.paper" }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="Repository"
              secondary={repos.length > 0 && repos[selectedIndex].reponame}
            />
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
          {repos.map((repo, index) => (
            <MenuItem
              key={index}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {`${repo.ownername}/${repo.reponame}`}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div>
        <button
          className="button is-danger is-outlined remove-button"
          onClick={removeRepo}
        >
          Remove
        </button>
        <button
          className="button is-primary is-outlined add-button"
          onClick={() => history.push("/addRepositories/start")}
        >
          Add
        </button>
      </div>
    </Card>
  );
}
