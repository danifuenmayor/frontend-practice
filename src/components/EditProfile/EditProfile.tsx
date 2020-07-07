import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Button,
  Typography,
  Box,
  Collapse,
  IconButton,
} from "@material-ui/core";
import { EDIT_PROFILE } from "../../reducers/user/types";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import EditProfileSchema from "./EditProfileSchema";
import TextInput from "../TextInput/TextInput";
import { RootState } from "../../reducers";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";

const EditProfile = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const [open, setOpen] = React.useState(true);

  const handleSubmit = (values: any) => {
    dispatch({
      type: EDIT_PROFILE,
      payload: values,
    });
  };

  const initialValues: any = {
    name: userState.name,
    lastName: userState.lastName,
    email: userState.email,
    password: "",
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
            initialValues={initialValues}
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
                <Button type="submit" variant="contained" color="secondary">
                  {props.isSubmitting ? "Enviando.." : "Enviar"}
                </Button>
                {!!userState.loading && (
                  <Collapse in={open}>
                    <Alert
                      severity="success"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      color="info"
                    >
                      Perfil editado con éxito
                    </Alert>
                  </Collapse>
                )}
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};
export default EditProfile;
