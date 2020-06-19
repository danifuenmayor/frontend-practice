import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import Imagedefault from "../images/default.jpg";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Box,
  Button,
  CircularProgress,
} from "@material-ui/core";
import {
  DELETE_PRODUCT,
  GET_PRODUCT,
} from "../../reducers/products/types";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 400,
    height: 550,
    borderRadius: "10%",
    objectFit: "contain",
    margin: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
}));
function capitalizeFirstLetter(string: any) {
  return string[0].toUpperCase() + string.slice(1);
}

const EditProduct = (props: any) => {
  const url = "http://localhost:3000";
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.products.selected);
  const deletedProduct = useSelector(
    (state: RootState) => state.products.deletedProduct
  );

  const handleOnClick = () => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({
      type: GET_PRODUCT,
      payload: id,
    });
  }, [dispatch, id]);

  if (product?.loading) {
    return <CircularProgress color="secondary" />;
  }

  if (product?.error) {
    return <h1>{product.error}</h1>;
  }

  return (
    <>
      {product?.item && (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia component="img" alt="img" image={Imagedefault} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.item &&
                  product.item.name &&
                  capitalizeFirstLetter(product.item.name.toLowerCase())}
              </Typography>
              <Typography gutterBottom variant="h5" component="h3">
                {`Precio: ${product.item.price}`}
              </Typography>
              <Typography gutterBottom variant="h5" component="h3">
                {`Comisión: ${product.item.commission}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h4">
                {product.item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Box>
              {deletedProduct?.loading && (
                <CircularProgress color="secondary" />
              )}
              {deletedProduct?.error && deletedProduct.error}
              {deletedProduct?.success && <Redirect to="/" />}
              <Button
                onClick={() => handleOnClick()}
                size="small"
                color="primary"
                disabled={Boolean(deletedProduct?.loading)}
              >
                Borrar
              </Button>
            </Box>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default EditProduct;
