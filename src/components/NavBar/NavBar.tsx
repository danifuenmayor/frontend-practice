import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SEND_LOGOUT } from "../../reducers/user/types";
import { RootState } from "../../reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      marginLeft: theme.spacing(115),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const NavBar = (props: any) => {
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleOnClick = () => {
    dispatch({
      type: SEND_LOGOUT,
    });
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Button href="/" color="inherit">
            Selyt
          </Button>
          {userState && userState.accessToken ? (
            <Button
              className={classes.button}
              onClick={() => handleOnClick()}
              color="inherit"
            >
              Cerrar sesión
            </Button>
          ) : (
            <>
              <Button href="/login" className={classes.button} color="inherit">
                Inicia sesión
              </Button>
              <Button href="/register" color="inherit">
                Registrate
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
