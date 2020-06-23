import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Button,
  Typography,
  Box,
  CircularProgress,
  Switch,
  makeStyles,
  Grid,
} from "@material-ui/core";

import { useHistory, useParams } from "react-router-dom";
import { Formik, Form } from "formik";

import TextInput from "../TextInput/TextInput";
import AdminEditUserSchema from "./AdminEditUserSchema";
import { RootState } from "../../reducers";
import { EDIT_USER, GET_ONE_USER } from "../../reducers/admin/types";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

const AdminEditUser = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { userId } = useParams();

  const user = useSelector((state: RootState) => state.admin.selected);
  useEffect(() => {
    dispatch({
      type: GET_ONE_USER,
      payload: userId,
    });
  }, [dispatch, userId]);

  const handleSubmit = (values: any) => {
    dispatch({
      type: EDIT_USER,
      payload: {
        ...values,
        userId: userId,
      },
    });
  };

  const initialValues: any = {
    name: user?.user?.name,
    lastName: user?.user?.lastName,
    email: user?.user?.email,
    password: "",
    isActive: user?.user?.isActive,
  };

  return (
    <>
      {!!user?.loading ? (
        <CircularProgress color="secondary" />
      ) : (
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
              validationSchema={AdminEditUserSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {(props) => (
                <Form>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography color="secondary" variant="h4">
                        Editar a {props.values.name}
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <TextInput label="Nombre" name="name" type="text" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput label="Apellido" name="lastName" type="text" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput
                        label="Correo electronico"
                        name="email"
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput
                        label="Contraseña"
                        name="password"
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {props.values.isActive
                        ? "Perfil Activado"
                        : "Perfil Desactivado"}
                      <Switch
                        name="isActive"
                        value={props.values.isActive}
                        checked={props.values.isActive}
                        onChange={(event, checked) => {
                          props.setFieldValue(
                            "isActive",
                            checked ? true : false
                          );
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                      >
                        {props.isSubmitting ? "Enviando.." : "Enviar"}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Container>
        </Box>
      )}
    </>
  );
};
export default AdminEditUser;
