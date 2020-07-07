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
    if (newProduct?.loading) {
      return <CircularProgress color="secondary" />;
    }
    if (newProduct?.success) {
      history.push(`/brands/${brandId}/products`);
    }
    if (newProduct?.error) {
      return <h1>{newProduct.error}</h1>;
    }
  };
  return (
    <>
      <Box m={4} data-test="component-create-product">
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
              <Form id="productForm">
                <Typography color="secondary" variant="h4">
                  Crea un nuevo producto
                </Typography>
                <TextInput
                  id="productForm-name"
                  label="Nombre"
                  name="name"
                  type="text"
                />
                <TextInput
                  data-testid="productForm-description"
                  label="Descripción"
                  name="description"
                  type="text"
                />
                <TextInput label="Precio" name="price" type="number" />
                <TextInput label="Commisión" name="commission" type="number" />
                <ImageInput label="image" name="image" />
                <br />
                <Button
                  id="submit"
                  data-test="btn-form"
                  disabled={props.isSubmitting}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {props.isSubmitting ? (
                    <div id="submitting">Submitting</div>
                  ) : (
                    "Enviar"
                  )}
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
