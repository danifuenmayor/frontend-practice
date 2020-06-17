import React from "react";
import { Formik, Form } from "formik";
import TextInput from "../TextInput/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Typography, Box } from "@material-ui/core";
import { SEND_LOGIN } from "../../reducers/user/types";
import { RootState } from "../../reducers";
import { useHistory, Redirect } from "react-router-dom";
import LoginSchema from "../LoginUser/LoginSchema";

const AdminLogin = () => {
  const history = useHistory();
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    dispatch({
      type: SEND_LOGIN,
      payload: values,
    });
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
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <Form>
                <Typography color="secondary" variant="h4">
                  Inicia sesión
                </Typography>
                <TextInput
                  label="Correo electronico"
                  name="email"
                  type="email"
                  placeholder="danifuenmayor@gmail.com"
                />
                <br />
                <TextInput label="Contraseña" name="password" type="password" />
                <br />
                {userState.accessToken ? (
                  <Redirect to="/brands" />
                ) : (
                  <p>{userState.error}</p>
                )}
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
export default AdminLogin;