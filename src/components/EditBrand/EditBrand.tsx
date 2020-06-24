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
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const brand = useSelector((state: RootState) => state.brands.selected);
  console.log(brand);

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
        id: id,
      },
    });
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => {
    dispatch({
      type: GET_ONE_BRAND,
      payload: id,
    });
  }, [dispatch, id]);

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
              <CardMedia component="img" alt="img" image={Imagedefault} />
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
                  image: "",
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
                    <TextInput
                      name="image"
                      margin="dense"
                      id="image"
                      label="Imagen"
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

export default EditBrand;
