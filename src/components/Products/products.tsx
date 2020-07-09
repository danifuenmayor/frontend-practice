import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Box } from "@material-ui/core";
import ProductCard from "./productCard";
import { GET_PRODUCTS } from "../../reducers/products/types";
import { RootState } from "../../reducers";
import { useParams, useHistory } from "react-router-dom";

const Products = (props: any) => {
  const history = useHistory();
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const products = useSelector((state: RootState) => state.products.products);
 

  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS,
    });
  }, [dispatch]);

  return (
    <>
      <Box m={5}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push("/brands")}
        >
          Volver
        </Button>
      </Box>
      {user && user.role === "admin" ? (
        <Grid container>
          <Box ml={120}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push(`/${brandId}/create-product`)}
            >
              Crear nuevo producto
            </Button>
          </Box>
          {Array.isArray(products) &&
            products
              .filter((product: any) => product.brandId === brandId)
              .map((product: any) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </Grid>
      ) : (
        <Grid container>
          {Array.isArray(products) &&
            products
              .filter((product: any) => product.brandId === brandId)
              .filter((product: any) => product.isActive === true)
              .map((product: any) => {
                return <ProductCard key={product.id} product={product} />;
              })}
        </Grid>
      )}
    </>
  );
};
export default Products;
