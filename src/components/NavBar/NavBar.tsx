import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(110),
    },
    title: {
      flexGrow: 1,
    },
  })
);
const NavBar = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Button href="/" color="inherit">
            Selyt
          </Button>
          <Button href="/login" className={classes.button} color="inherit">
            Inicia sesión
          </Button>
          <Button href="/register" color="inherit">
            Registrate
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
