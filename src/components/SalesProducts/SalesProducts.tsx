import React from "react";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Typography } from "@material-ui/core";
import SaleProductSchema from "./SaleProductSchema";
import TextInput from "../TextInput/TextInput";
import { SALE_PRODUCT } from "../../reducers/sales/types";

const SalesProducts = (props: any) => {
  const history = useHistory();
  const userState = useSelector((state: RootState) => state.sales);
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    dispatch({
      type: SALE_PRODUCT,
      payload: values,
    });
  };

  return (
    <div>
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
              lastName: "",
              rut: "",
              phone: "",
              address: "",
            }}
            validationSchema={SaleProductSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <Form>
                <Typography color="secondary" variant="h4">
                  Tu venta del producto
                </Typography>
                <TextInput label="Nombre" name="name" type="text" />
                <TextInput label="Apellido" name="lastName" type="text" />
                <TextInput label="Rut" name="rut" type="text" />
                <TextInput label="Número telefónico" name="phone" type="text" />
                <TextInput label="Dirección" name="address" type="text" />
                <br />

                {userState.error ? (
                  <span className="errorMessage">
                    <p>{userState.error}</p>
                  </span>
                ) : null}

                <Button type="submit" variant="contained" color="secondary">
                  Vender Producto
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </div>
  );
};

export default SalesProducts;
