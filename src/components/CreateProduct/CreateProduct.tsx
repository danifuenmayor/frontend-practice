import React from "react";
import { useDispatch } from "react-redux";
import { Container, Button, Typography, Box } from "@material-ui/core";
import { EDIT_PROFILE } from "../../reducers/user/types";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import CreateProductSchema from "./CreateProductSchema";
import TextInput from "../TextInput/TextInput";
import { CREATE_PRODUCT } from "../../reducers/products/types";

const CreateProduct = (props: any) => {
  const { brandId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    dispatch({
      type: CREATE_PRODUCT,
      payload: {
        ...values,
        brandId: brandId,
      },
    });
    setTimeout(() => {
      history.push(`/brands${brandId}`);
    }, 7000);
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
            initialValues={{ name: "", lastName: "", email: "" }}
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
                <TextInput name="image" type="file" />
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
