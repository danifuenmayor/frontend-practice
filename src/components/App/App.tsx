import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { SEND_MESSAGE } from "../../reducers/example/types";
import LoginForm from "../LoginUser/LoginForm";
import RegisterUser from "../Register/RegisterUser";
import NavBar from "../Home/NavBar";
import Home from "../Home/Home";
import Brands from "../Brands/brands";

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
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterUser} />
        <Route exact path={"/brands"} component={Brands} />
        {/* <Route exact path={'/login-admin'} component={LoginAdmin} />
        <Route exact path={'/register-admin'} component={RegisterAdmin} />        
        <Route exact path={'/products'} component={Products} />
        <Route exact path={'/sales-charts'} component={SalesChart} /> */}
        <Route render={() => <h1>Not found!</h1>} />
        <div className={classes.App}>
          <Typography variant="h4" component="h1" className={classes.Title}>
            Welcome to Selyt!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Hey!
          </Button>
          <div className={classes.Emojis}>
            {list.map(({ message }) => message)}
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
