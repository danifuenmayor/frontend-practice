import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import RegisterSchema from "./RegisterShemaValidation";
import CustomTextField from "./CustomTextField";
import {
  Container,
  CardContent,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  formwrap: {
    width: "40%",
    margin: "0 auto",
  },
});

const RegisterUser = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.formwrap}>
      <Container>
        <CardContent>
          <Formik
            initialValues={{
              fullname: "",
              mail: "",
              rut: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
              }, 3000);
            }}
          >
            {(props: any) => (
              <Form>
                <Typography variant="h4">Create a new account</Typography>
                <br />
                <br />
                <CustomTextField
                  label="Fullname"
                  name="fullname"
                  type="text"
                  placeholder="Fullname"
                  onChange={props.handleChange}
                />
                <CustomTextField
                  label="Email"
                  name="mail"
                  type="email"
                  placeholder="Email"
                />
                <CustomTextField
                  label="Rut"
                  name="rut"
                  type="text"
                  placeholder="Rut"
                />
                <CustomTextField
                  label="Password"
                  name="password"
                  type="text"
                  placeholder="Password"
                />
                <CustomTextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="text"
                  placeholder="Confirm Password"
                />
                <Button
                  type="submit"
                  disabled={props.isSubmmiting || props.isValidating}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <br />
          <Link to="/login">Ya tienes cuenta</Link>
        </CardContent>
      </Container>
    </div>
  );
};

export default RegisterUser;
