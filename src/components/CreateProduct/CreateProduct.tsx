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
import CreateProductSchema from "./CreateProductSchema";
import TextInput from "../TextInput/TextInput";
import { CREATE_PRODUCT } from "../../reducers/products/types";
import { RootState } from "../../reducers";
import ImageInput from "../ImageInput/ImageInput";
const CreateProduct = (props: any) => {
  const { brandId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const newProduct = useSelector(
    (state: RootState) => state.products.newProduct
  );
  const handleSubmit = (values: any) => {
    dispatch({
      type: CREATE_PRODUCT,
      payload: {
        ...values,
        brandId: brandId,
      },
    });
    if (newProduct?.loading === true) {
      return <CircularProgress color="secondary" />;
    }
    if (newProduct?.success === true) {
      history.push(`/brands/${brandId}/products`);
    }
    if (newProduct?.error) {
      return <h1>{newProduct.error}</h1>;
    }
  };
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
              description: "",
              price: "",
              commission: "",
              image: null,
            }}
            validationSchema={CreateProductSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <Form>
                <Typography color="secondary" variant="h4">
                  Crea un nuevo producto
                </Typography>
                <TextInput label="Nombre" name="name" type="text" />
                <TextInput label="Descripción" name="description" type="text" />
                <TextInput label="Precio" name="price" type="number" />
                <TextInput label="Commisión" name="commission" type="number" />
                <ImageInput label="image" name="image" />
                <br />
                <Button type="submit" variant="contained" color="secondary">
                  {props.isSubmitting ? "Enviando.." : "Enviar"}
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};
export default CreateProduct;
