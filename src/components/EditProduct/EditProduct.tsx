import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";

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
  Switch,
  Grid,
} from "@material-ui/core";
import {
  DELETE_PRODUCT,
  GET_PRODUCT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_CLEAR,
} from "../../reducers/products/types";
import { Formik, Form } from "formik";
import EditProductSchema from "./EditProductSchema";
import TextInput from "../TextInput/TextInput";
import ImageInput from "../ImageInput/ImageInput";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    height: 400,
    borderRadius: "10%",
    objectFit: "contain",
    margin: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: 300,
    height: 200,
    objectFit: "contain",
  },
  content: {
    width: 300,
    height: 120,
  },
}));

function capitalizeFirstLetter(string: any) {
  return string[0].toUpperCase() + string.slice(1);
}

const EditProduct = (props: any) => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.products.selected);
  const deletedProduct = useSelector(
    (state: RootState) => state.products.deletedProduct
  );
  const editedProduct = useSelector(
    (state: RootState) => state.products.editedProduct
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
  };

  useEffect(() => {
    dispatch({
      type: EDIT_PRODUCT_CLEAR,
    });

    dispatch({
      type: GET_PRODUCT,
      payload: id,
    });
  }, [dispatch, id]);

  return (
    <>
      {product?.item && (
        <>
          <Button onClick={() => history.push(`/brands`)}>Volver</Button>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.image}
                component="img"
                alt="img"
                image={product.item.image}
              />
              <CardContent className={classes.content}>
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
          {deletedProduct?.loading && (
            <Box m={5}>
              <CircularProgress color="secondary" />
            </Box>
          )}
          {deletedProduct?.error && deletedProduct.error}
          {deletedProduct?.success && (
            <Box m={5}>
              <Alert>Producto ha sido eliminado con exito</Alert>
            </Box>
          )}
          {editedProduct?.loading && (
            <Box m={5}>
              <CircularProgress color="secondary" />
            </Box>
          )}
          {editedProduct?.error && (
            <Box m={5}>
              <Alert>{editedProduct?.error}</Alert>
            </Box>
          )}
          {editedProduct?.success && (
            <Box m={5}>
              <Alert>Producto ha sido editado con exito</Alert>
            </Box>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Editar Producto</DialogTitle>
            <DialogContent>
              <Formik
                initialValues={{
                  name: product?.item?.name,
                  description: product?.item?.description,
                  price: product?.item?.price,
                  commission: product?.item?.commission,
                  image: null,
                  isActive: product?.item?.isActive,
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
                    <ImageInput label="image" name="image" />
                    <Box p={3}>
                      {props.values.isActive
                        ? "Producto Disponible"
                        : "Producto No Disponible"}
                      <Switch
                        name="isActive"
                        value={props.values.isActive}
                        checked={props.values.isActive}
                        onChange={(event, checked) => {
                          props.setFieldValue(
                            "isActive",
                            checked ? true : false
                          );
                        }}
                      />
                    </Box>
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
