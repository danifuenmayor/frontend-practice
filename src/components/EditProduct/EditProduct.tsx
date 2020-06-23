import React, { useEffect } from "react";
import { useParams, Redirect, useHistory, useLocation } from "react-router-dom";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import {
  DELETE_PRODUCT,
  GET_PRODUCT,
  EDIT_PRODUCT,
} from "../../reducers/products/types";
import { Formik, Form } from "formik";
import EditProductSchema from "./EditProductSchema";
import TextInput from "../TextInput/TextInput";

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
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.products.selected);
  const deletedProduct = useSelector(
    (state: RootState) => state.products.deletedProduct
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOnClick = () => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };

  const handleSubmit = (values: any) => {
    dispatch({
      type: EDIT_PRODUCT,
      payload: {
        ...values,
        id: id,
      },
    });
    setOpen(false);
    window.location.reload();
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
        <>
          <Button onClick={() => history.push(`/brands`)}>Volver</Button>
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
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h4"
                >
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
                <Button onClick={handleClickOpen} size="small" color="primary">
                  Editar
                </Button>
              </Box>
            </CardActions>
          </Card>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Editar Producto</DialogTitle>
            <DialogContent>
              <Formik
                initialValues={{
                  name: "",
                  description: "",
                  price: "",
                  commission: "",
                }}
                validationSchema={EditProductSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {(props) => (
                  <Form>
                    <TextInput
                      margin="dense"
                      id="name"
                      name="name"
                      label="Nombre"
                      type="text"
                      fullWidth
                    />
                    <TextInput
                      name="description"
                      margin="dense"
                      id="description"
                      label="Descripción"
                      type="text"
                      fullWidth
                    />
                    <TextInput
                      name="price"
                      margin="dense"
                      id="price"
                      label="Precio"
                      type="text"
                      fullWidth
                    />
                    <TextInput
                      name="commission"
                      margin="dense"
                      id="commission"
                      label="Comisión"
                      type="text"
                      fullWidth
                    />
                    <Button type="submit" color="primary" variant="outlined">
                      {props.isSubmitting ? "Enviando.." : "Enviar"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default EditProduct;