import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import SalesChart from "../SalesChart/SalesChart";
import EditProduct from "../Products/EditProduct";

const App = () => {
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
        <Route exact path={"/products/:id"} component={EditProduct} />
        <Route exact path={"/brands"} component={BrandsHome} />
        <Route exact path={"/sales"} component={SalesProducts} />
        <Route exact path={"/admin-login"} component={AdminLogin} />
        <Route exact path={"/admin-profile"} component={AdminProfile} />
        <Route exact path={"/show-users"} component={UserList} />
        <Route exact path={"/sales-chart"} component={SalesChart} />
        <Route render={() => <h1>Not found!</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
