import React from "react";
import { Formik, Form } from "formik";
import LoginSchema from "./LoginUser/LoginSchema";
import TextInput from "./TextInput/TextInput";
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
      <Container maxWidth="sm">
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
              <Typography variant="h4">Login</Typography>
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
