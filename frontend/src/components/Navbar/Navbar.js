import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  // Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
// import decode from "jwt-decode";
// import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // margin: "30px 0",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row !important",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  link: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    flex: 2,
    padding: "0 0 0 24px",
    "&:active": {
      color: "blue",
    },
    color: "black",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 0 0",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      justifyContent: "center",
    },
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginLeft: "15px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    flex: "1",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      paddingBottom: "4px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link className={classes.link} to="/">
        <Typography className={classes.heading} variant="h3" align="center">
          SRMS
        </Typography>
      </Link>
      <Toolbar className={classes.toolbar}>
        {/* {user?.userProfile ? ( */}
        <Link className={classes.link} style={{ padding: 0 }} to="/dashboard">
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              {/* {user?.userProfile.name} */}Dashboard
            </Typography>
          </div>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
