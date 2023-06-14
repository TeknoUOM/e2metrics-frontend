import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./SelectRepos.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:hover:not(.Mui-disabled)": {
      cursor: "pointer",
    },
  },
}));

export default function SelectRepo({
  repos = [],
  setReponame,
  setOwnername,
  setReponame2,
  setOwnername2,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const [anchorEl2, setAnchorEl2] = useState(null);
  const [selectedIndex2, setSelectedIndex2] = useState(1);
  const open2 = Boolean(anchorEl2);

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

  const handleClickListItem2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuItemClick2 = (event, index) => {
    setSelectedIndex2(index);
    setReponame2(repos[index].reponame);
    setOwnername2(repos[index].ownername);
    setAnchorEl2(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Card className={classes.root}>
      <div>
        <List component="nav" aria-label="Device settings">
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="Repository One"
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
        <List component="nav" aria-label="Device settings">
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open2 ? "true" : undefined}
            onClick={handleClickListItem2}
          >
            <ListItemText
              primary="Repository Two"
              secondary={repos.length > 0 && repos[selectedIndex2].reponame}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {repos.map((repo, index) => (
            <MenuItem
              key={index}
              selected={index === selectedIndex2}
              onClick={(event) => handleMenuItemClick2(event, index)}
            >
              {`${repo.ownername}/${repo.reponame}`}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Card>
  );
}
