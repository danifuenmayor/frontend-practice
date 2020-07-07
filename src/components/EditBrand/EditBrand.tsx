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
} from "@material-ui/core";
import {
  GET_ONE_BRAND,
  EDIT_BRAND,
  EDIT_BRAND_CLEAR,
} from "../../reducers/brands/types";
import { Formik, Form } from "formik";
import EditBrandSchema from "./EditBrandSchema";
import TextInput from "../TextInput/TextInput";
import ImageInput from "../ImageInput/ImageInput";
import Alert from "@material-ui/lab/Alert";
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
const EditBrand = (props: any) => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const { brandId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const brand = useSelector((state: RootState) => state.brands.selected);
  const brandClear = useSelector(
    (state: RootState) => state.brands.editedBrand
  );
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (values: any) => {
    dispatch({
      type: EDIT_BRAND,
      payload: {
        ...values,
        id: brandId,
      },
    });
    setOpen(false);
  };

  useEffect(() => {
    dispatch({
      type: EDIT_BRAND_CLEAR,
    });

    dispatch({
      type: GET_ONE_BRAND,
      payload: brandId,
    });
  }, [dispatch, brandId]);

  return (
    <>
      {brand?.item && (
        <>
          <Button onClick={() => history.push(`/brands`)}>Volver</Button>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia component="img" alt="img" image={brand.item.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {brand.item &&
                    brand.item.name &&
                    capitalizeFirstLetter(brand.item.name.toLowerCase())}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box>
                <Button onClick={handleClickOpen} size="small" color="primary">
                  Editar
                </Button>
              </Box>
            </CardActions>
          </Card>
          {brandClear?.loading && <CircularProgress color="secondary" />}
          {brandClear?.error && brandClear?.error}

          {brandClear?.success && (
            <Box m={5}>
              <Alert>Marca ha sido editada con éxito</Alert>
            </Box>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Editar Marca</DialogTitle>
            <DialogContent>
              <Formik
                initialValues={{
                  name: "",
                  image: null,
                }}
                validationSchema={EditBrandSchema}
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
                    <ImageInput label="image" name="image" />
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
export default EditBrand;
