import React, { useEffect } from "react";
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
import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_CLEAR,
} from "../../reducers/products/types";
import { RootState } from "../../reducers";
import ImageInput from "../ImageInput/ImageInput";
import Alert from "@material-ui/lab/Alert";

const CreateProduct = (props: any) => {
  const { brandId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const newProduct = useSelector(
    (state: RootState) => state.products.newProduct
  );

  useEffect(() => {
    dispatch({
      type: CREATE_PRODUCT_CLEAR,
    });
  }, [dispatch]);

  const handleSubmit = (values: any) => {
    dispatch({
      type: CREATE_PRODUCT,
      payload: {
        ...values,
        brandId: brandId,
      },
    });
  };
  if (newProduct?.success) {
    history.push(`/brands/${brandId}/products`);
  }
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
        <Container maxWidth="xs" data-test="create-product-component">
          <Formik
            data-test="form-test"
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
                  data-test="btn-submit"
                  disabled={props.isSubmitting}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {props.isSubmitting ? (
                    <div id="submitting">Enviando</div>
                  ) : (
                    "Enviar"
                  )}
                </Button>
                {newProduct?.loading && <CircularProgress color="secondary" />}
                {newProduct?.error && (
                  <Box m={5}>
                    <Alert>{newProduct?.error}</Alert>
                  </Box>
                )}
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};
export default CreateProduct;
