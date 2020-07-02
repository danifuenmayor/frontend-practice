import React from "react";
import { Formik, Form } from "formik";
import LoginSchema from "./LoginSchema";
import TextInput from "../TextInput/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Typography, Box } from "@material-ui/core";
import { SEND_LOGIN } from "../../reducers/user/types";
import { RootState } from "../../reducers";
import { useHistory, Redirect } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  // This is Redux

  const handleSubmit = (values: any) => {
    dispatch({
      type: SEND_LOGIN, // Type of action
      payload: values, //email and password
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
                  className="email"
                  label="Correo electronico"
                  name="email"
                  type="email"
                  placeholder="danifuenmayor@gmail.com"
                />
                <br />

                <TextInput
                  className="password"
                  label="Contraseña"
                  name="password"
                  type="password"
                />
                <br />
                {userState.accessToken ? (
                  <Redirect to="/user-profile" />
                ) : (
                  <p>{userState.error}</p>
                )}
                <br />
                <Button
                  id="submit-login"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
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
export default LoginForm;
