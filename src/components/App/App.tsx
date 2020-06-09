import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { SEND_MESSAGE } from "../../reducers/example/types";
import LoginForm from "../LoginForm";
import LoginUser from "../LoginUser";

const App = () => {
  // const dispatch = useDispatch();
  // const list = useSelector((state: RootState) => state.example.list);

  // const handleClick = (event: any) => {
  //   dispatch({
  //     type: SEND_MESSAGE,
  //     payload: {
  //       message: "👋",
  //     },
  //   });
  // };

  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={LoginUser} />
        <Route exact path={"/login"} component={LoginUser} />
        {/* <Route exact path={'/register'} component={Register} />
        <Route exact path={'/login-admin'} component={LoginAdmin} />
        <Route exact path={'/register-admin'} component={RegisterAdmin} />
        <Route exact path={'/brands'} component={Brands} />
        <Route exact path={'/products'} component={Products} />
        <Route exact path={'/sales-charts'} component={SalesChart} />
        <Route render={() => <h1>Not found!</h1>} /> */}

        {/* <div className={classes.App}>
            <Typography variant="h4" component="h1" className={classes.Title}>
              Welcome to Selyt!
            </Typography>
            <Button variant="contained" color="primary" onClick={handleClick}>
              Hey!
          </Button>
            <div className={classes.Emojis}>{list.map(({ message }) => message)}</div>
          </div> */}
      </Switch>
    </Router>
  );
};

export default App;
