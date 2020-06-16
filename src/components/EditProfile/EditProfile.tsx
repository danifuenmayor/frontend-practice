import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Typography, Box } from "@material-ui/core";
import { EDIT_PROFILE } from "../../reducers/user/types";
import { useHistory, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import EditProfileSchema from "./EditProfileSchema";
import TextInput from "../TextInput/TextInput";
import { RootState } from "../../reducers";

const EditProfile = (props: any) => {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    dispatch({
      type: EDIT_PROFILE,
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
            initialValues={{ name: "", lastName: "", email: "" }}
            validationSchema={EditProfileSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {(props) => (
              <Form>
                <Typography color="secondary" variant="h4">
                  Edita tu perfil
                </Typography>
                <TextInput label="Nombre" name="name" type="text" />
                <TextInput label="Apellido" name="lastName" type="text" />
                <TextInput
                  label="Correo electronico"
                  name="email"
                  type="email"
                />
                <TextInput label="Contraseña" name="password" type="password" />
                <br />
                2:14
                {user.accessToken ? (
                  <Redirect to="/user-profile" />
                ) : (
                  <p>{user.error}</p>
                )}
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
export default EditProfile;
