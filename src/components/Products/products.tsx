import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import ProductCard from "./productCard";
import Imagedefault from "../images/default.jpg";
import { GET_PRODUCTS, PayloadProducts } from "../../reducers/products/types";

const Products = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS,
    });
  }, []);
  return (
    <>
      <Grid container>
        <Typography variant="h2" align="center" color="secondary">
          {props.brand}
        </Typography>
        <ProductCard image={Imagedefault} />
        <ProductCard image={Imagedefault} />
        <ProductCard image={Imagedefault} />
      </Grid>
    </>
  );
};
export default Products;
