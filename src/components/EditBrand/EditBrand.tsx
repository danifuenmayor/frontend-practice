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
  Grid,
  Switch,
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
    width: 300,
    height: 300,
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
          <Button
            variant="outlined"
            color="primary"
            onClick={() => history.push(`/brands`)}
          >
            Volver
          </Button>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.image}
                    component="img"
                    alt="img"
                    image={brand.item.image}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {brand.item &&
                        brand.item.name &&
                        capitalizeFirstLetter(brand?.item?.name.toLowerCase())}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Formik
                initialValues={{
                  name: "",
                  image: null,
                  isActive: brand?.item?.isActive,
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
                      label="Nombre Marca"
                      type="text"
                      fullWidth
                    />
                    <ImageInput label="image" name="image" />
                    <Box p={3}>
                      {props.values.isActive
                        ? "Marca Disponible"
                        : "Marca No Disponible"}
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
                      {props.isSubmitting ? "Enviando.." : "Editar"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
          {brandClear?.loading && <CircularProgress color="secondary" />}
          {brandClear?.error && brandClear?.error}
          {brandClear?.success && (
            <Box m={5}>
              <Alert>Marca ha sido editada con éxito</Alert>
            </Box>
          )}
        </>
      )}
    </>
  );
};
export default EditBrand;
