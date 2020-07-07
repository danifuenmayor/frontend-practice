import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import CreateBrandSchema from "./CreateBrandSchema";
import TextInput from "../TextInput/TextInput";
import { CREATE_ONE_BRAND } from "../../reducers/brands/types";
import { RootState } from "../../reducers";
import ImageInput from "../ImageInput/ImageInput";
import Alert from "@material-ui/lab/Alert";

const CreateBrand = (props: any) => {
  const { brandId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const newBrand = useSelector((state: RootState) => state.brands.editedBrand);

  const handleSubmit = (values: any) => {
    dispatch({
      type: CREATE_ONE_BRAND,
      payload: {
        ...values,
        id: brandId,
      },
    });
  };
  //   if (newBrand?.loading === true) {
  //     return <CircularProgress color="secondary" />;
  //   }
  //   if (newBrand?.success === true) {
  //     history.push(`/brands`);
  //   }
  //   if (newBrand?.error) {
  //     return <h1>{newBrand.error}</h1>;
  //   }
  return (
    <>
      <Box m={4}>
        <Button
          variant="outlined"
          onClick={() => history.goBack()}
          color="secondary"
        >
          Volver
        </Button>
        <Container maxWidth="xs">
          <Formik
            initialValues={{
              name: "",
              image: null,
            }}
            validationSchema={CreateBrandSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <Form>
                <Typography color="secondary" variant="h4">
                  Crea una nueva marca
                </Typography>
                <TextInput label="Nombre" name="name" type="text" />
                <ImageInput label="image" name="image" />
                <br />
                <Button type="submit" variant="contained" color="secondary">
                  {props.isSubmitting ? "Enviando.." : "Enviar"}
                </Button>
              </Form>
            )}
          </Formik>
          {newBrand?.error && (
            <Box m={5}>
              <Alert>{newBrand.error}</Alert>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};
export default CreateBrand;
