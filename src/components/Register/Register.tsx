import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import RegisterSchema from "./RegisterShemaValidation";
import { SEND_REGISTER } from "../../reducers/user/types";
import CustomTextField from "./RegisterCustomTextField";
import {
  Container,
  Typography,
  Button,
  makeStyles,
  CssBaseline,
  Grid,
} from "@material-ui/core";
import { useDispatch  } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

const Register = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    dispatch({
      type: SEND_REGISTER,
      payload: values,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography color="secondary" variant="h4" component="h1">
          Crea una nueva cuenta
        </Typography>
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form className={classes.form}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    label="Apellido"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    label="Contraseña*"
                    name="password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    label="Confirmar Contraseña*"
                    name="confirmPassword"
                    type="password"
                  />
                </Grid>

                {/* {userState.isActive ? (
                props.history.push("login")
              ) : (
                <p>{userState.error}</p>
              )} */}

                <br />
                <Button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  className={classes.submit}
                >
                  Registrarse
                </Button>
                <Grid container justify="center">
                  <Grid item>
                    <Link to="/login">Ya tengo una cuenta</Link>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Register;
