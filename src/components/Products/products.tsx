import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Box } from "@material-ui/core";
import ProductCard from "./productCard";
import Imagedefault from "../images/default.jpg";
import { GET_PRODUCTS } from "../../reducers/products/types";
import { RootState } from "../../reducers";
import { useParams, useHistory } from "react-router-dom";

const Products = (props: any) => {
  const history = useHistory();
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS,
    });
  }, [dispatch]);
  return (
    <>
      <Box m={5}>
        <Button onClick={() => history.push("/brands")}>Volver</Button>
      </Box>
      <Grid container>
        {Array.isArray(products) &&
          products
            .filter((product: any) => product.brandId === brandId)
            .map((product: any) => {
              return <ProductCard product={product} image={Imagedefault} />;
            })}
      </Grid>
    </>
  );
};
export default Products;
