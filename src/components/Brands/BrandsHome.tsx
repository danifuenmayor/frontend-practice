import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../reducers";
import { GET_All_BRANDS } from "../../reducers/brands/types";
import { useSelector, useDispatch } from "react-redux";
import Brands from "./brands";
import Typography from "@material-ui/core/Typography";

const BrandsHome = (props: any) => {

  const dispatch = useDispatch();
  const brandsState = useSelector((state: RootState) => state.brands.brands);
  const userState = useSelector((state: RootState) => state.user);

  console.log(brandsState);

  useEffect(() => {
    if (userState.accessToken !== "") {
      dispatch({
        type: GET_All_BRANDS,
      });
    } else {
      props.history.push("/login");
    }
  }, [dispatch, props.history, userState.accessToken]);

  const setProducts = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <div className="brands">
        <Typography variant="h2">Brands</Typography>
        <div>
          <Brands brands={brandsState} setProducts={setProducts} />
        </div>
        <br />
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default BrandsHome;
