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
import { GET_ONE_BRAND, EDIT_BRAND } from "../../reducers/brands/types";
import { Formik, Form } from "formik";
import EditBrandSchema from "./EditBrandSchema";
import TextInput from "../TextInput/TextInput";
import ImageInput from "../ImageInput/ImageInput";
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
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const { brandId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const brand = useSelector((state: RootState) => state.brands.selected);
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
    history.push(`/brands`);
  };
  useEffect(() => {
    dispatch({
      type: GET_ONE_BRAND,
      payload: brandId,
    });
  }, [dispatch, brandId]);
  if (brand?.loading) {
    return <CircularProgress color="secondary" />;
  }
  if (brand?.error) {
    return <h1>{brand.error}</h1>;
  }
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
