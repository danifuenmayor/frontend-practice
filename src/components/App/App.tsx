import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { SEND_MESSAGE } from "../../reducers/example/types";
import LoginForm from "../LoginUser/LoginForm";
import RegisterUser from "../Register/RegisterUser";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Products from "../Products/products";
import UserProfile from "../UserProfile/UserProfile";
import EditProfile from "../EditProfile/EditProfile";
import SalesProducts from "../SalesProducts/SalesProducts";
import BrandsHome from "../Brands/BrandsHome";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminProfile from "../AdminProfile/AdminProfile";
import UserList from "../UserList/UserList";

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
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/register" component={RegisterUser} />
        <Route exact path={"/brands/:brandId/products"} component={Products} />
        <Route exact path={"/brands"} component={BrandsHome} />
        <Route exact path={"/sales"} component={SalesProducts} />
        <Route exact path={"/admin-login"} component={AdminLogin} />
        <Route exact path={"/admin-profile"} component={AdminProfile} />
        <Route exact path={"/show-users"} component={UserList} />
        {/* <Route exact path={"/sales-charts"} component={SalesChart} /> */}
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
