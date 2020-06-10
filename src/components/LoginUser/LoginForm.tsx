import React from "react";
import { Formik, Form } from "formik";
import LoginSchema from "./LoginSchema";
import TextInput from "./TextInput";
import classes from "../components/App/App.module.scss";
import { Container, Button, Typography } from "@material-ui/core";

const LoginForm = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <form>
              <Typography color="primary" variant="h4">
                Login
              </Typography>
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="danifuenmayor@gmail.com"
              />
              <br />
              <TextInput label="Password" name="password" type="password" />
              <br />
              <Button type="submit" variant="contained">
                {props.isSubmitting ? "Loading" : "Submit"}
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
};
export default LoginForm;
