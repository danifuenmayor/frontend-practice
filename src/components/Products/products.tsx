import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import ProductCard from "./ProductCard";
import Imagedefault from "../images/default.jpg";
import { GET_PRODUCTS } from "../../reducers/products/types";
import { RootState } from "../../reducers";
import { useParams } from "react-router-dom";

const Products = (props: any) => {
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.products[0]
  );
  console.log(products);
  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS,
    });
  }, []);
  return (
    <>
      <Grid container>
        {!!products &&
          products
            .filter((product: any) => product.brandId[0] === brandId)
            .map((product: any) => {
              return <ProductCard product={product} image={Imagedefault} />;
            })}
      </Grid>
    </>
  );
};
export default Products;
