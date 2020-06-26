import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "../LoginUser/LoginForm";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Products from "../Products/products";
import UserProfile from "../UserProfile/UserProfile";
import EditProfile from "../EditProfile/EditProfile";
import BrandsHome from "../Brands/BrandsHome";
import AdminLogin from "../AdminLogin/AdminLogin";
import AdminProfile from "../AdminProfile/AdminProfile";
import UserList from "../UserList/UserList";
import EditProduct from "../EditProduct/EditProduct";
import Register from "../Register/Register";
import Sales from "../Sales/Sales";
import EditBrand from "../EditBrand/EditBrand";
import AdminEditUser from "../AdminEditUser/AdminEditUser";
import AdminChart from "../SalesChart/SalesChart2y";
import SalesCharts from "../SalesChart/SalesChart";
import SalesChartLine from "../SalesChart/SalesChartLine";
import CreateProduct from "../CreateProduct/CreateProduct";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={LoginForm} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route exact path={"/brands/:brandId/products"} component={Products} />
        <Route exact path={"/products/:id"} component={EditProduct} />
        <Route
          exact
          path={"/:brandId/create-product"}
          component={CreateProduct}
        />
        <Route exact path={"/brands"} component={BrandsHome} />
        <Route exact path={"/brands/:brandId/products"} component={Products} />
        <Route exact path={"/admin-login"} component={AdminLogin} />
        <Route exact path={"/admin-profile"} component={AdminProfile} />
        <Route exact path={"/show-users"} component={UserList} />
        <Route exact path={"/products/:productId/sales"} component={Sales} />
        <Route exact path={"/admin-chart"} component={AdminChart} />
        <Route exact path={"/sales-charts"} component={SalesCharts} />

        <Route exact path={"/sales-chart-line"} component={SalesChartLine} />
        <Route exact path={"/brands/:brandId"} component={EditBrand} />
        <Route
          exact
          path={"/show-users/:userId/edit-user"}
          component={AdminEditUser}
        />
        <Route render={() => <h1>Not found!</h1>} />
      </Switch>
    </Router>
  );
};

export default App;
