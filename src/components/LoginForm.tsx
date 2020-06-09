import React from "react";
import { Formik, Form } from "formik";
import LoginSchema from "./LoginSchema";
import TextInput from "./TextInput";
import classes from "./App.module.scss";
import {
  Container,
  Button,
  Typography,
  FormControl,
  TextField,
} from "@material-ui/core";

const LoginForm = () => {
  return (
    <>
      <Container>
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
          {/* {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => ( */}
          {(props) => (
            <form>
              <Typography>Login</Typography>
              <TextInput
                label="Email"
                name="email"
                type="email"
                placeholder="danifuenmayor@gmail.com"
              />
              <TextInput label="Password" name="password" type="password" />

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
