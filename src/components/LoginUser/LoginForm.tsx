import React from "react";
import { Formik, Form } from "formik";
import LoginSchema from "./LoginSchema";
import TextInput from "./TextInput";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Typography } from "@material-ui/core";
import { SEND_LOGIN } from "../../reducers/user/types";
import { RootState } from "../../reducers";

const LoginForm = () => {
  const userState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    dispatch({
      type: SEND_LOGIN,
      payload: values,
    });
  };
  return (
    <>
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
              {userState.error && <p>{userState.error}</p>}
              <br />
              <Button type="submit" variant="contained">
                {props.isSubmitting ? "Loading..." : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
export default LoginForm;
