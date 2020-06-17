import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import RegisterSchema from "./RegisterShemaValidation";
import { RootState } from "../../reducers";
import { SEND_REGISTER } from "../../reducers/user/types";
import CustomTextField from "./RegisterCustomTextField";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  formwrap: {
    margin: "0 auto",
  },
});

const RegisterUser = (props: any) => {
  const classes = useStyles();
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    console.log("values :", values);
    dispatch({
      type: SEND_REGISTER,
      payload: values,
    });
  };

  return (
    <div className={classes.formwrap}>
      <Container maxWidth="xs">
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
            <Form>
              <Typography variant="h4">Create a new account</Typography>
              <br />
              <br />
              <CustomTextField
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <CustomTextField
                label="Last name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <CustomTextField
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <CustomTextField
                label="Password"
                name="password"
                type="password"
              />
              <CustomTextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <br />

              {userState.isActive ? (
                props.history.push("login")
              ) : (
                <p>{userState.error}</p>
              )}

              <br />
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
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
      </Container>
    </div>
  );
};

export default RegisterUser;
