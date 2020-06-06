import React from "react";
import classes from "./App.module.scss";
import { Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { SEND_MESSAGE } from "../../reducers/example/types";

const App = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.example.list);

  const handleClick = (event: any) => {
    dispatch({
      type: SEND_MESSAGE,
      payload: {
        message: "👋",
      },
    });
  };

  return (
    <div className={classes.App}>
      <Typography variant="h4" component="h1" className={classes.Title}>
        Welcome to Selyt!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Hey!
      </Button>
      <div className={classes.Emojis}>{list.map(({ message }) => message)}</div>
    </div>
  );
};

export default App;
