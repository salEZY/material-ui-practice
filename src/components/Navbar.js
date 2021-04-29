import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

//drawer/popover/tool tip/app bar /checkbox
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  popBtn: {
    marginLeft: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(true);
  const [drawer, setDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const list = () => {
    
      <List>
        <ListItem>List item working</ListItem>
        <ListItem>List item working</ListItem>
        <ListItem>List item working</ListItem>
      </List>
   
  };

  return (
    <>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawer(true)}>
            <MenuIcon  />
          </IconButton>

          <Typography variant="h6">VEZBA MATERIAL-UI</Typography>
          <Button
            className={classes.popBtn}
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Open Popover
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              The content of the Popover.
            </Typography>
          </Popover>
        </Toolbar>
      </AppBar>
      
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Drawer anchor={"left"} open={drawer} onClose={() => setDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default Navbar;
