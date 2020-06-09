import React from "react";
//import { withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Formik } from "formik";
// import {
//   FormControlLabel,
//   TextField,
//   Typography,
//   Container,
//   Button,
// } from "@material-ui/core";
import classes from "./Register.module.scss";
import RegisterSchema from "./RegisterShema";
import CustomTextField from "./CustomTextField";

const RegisterUser = (props: any) => {
  return (
    <div className={classes.FormWrap}>
      <h1>Create a new account</h1>
      <Formik
        initialValues={{ fullname: "", mail: "", rut: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <form>
            <h1>Sign UP</h1>
            <CustomTextField
              label="Fullname"
              name="fullname"
              type="text"
              placeholder="Fullname"
            />
            <CustomTextField
              label="Email"
              name="mail"
              type="text"
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
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </form>
        )}
      </Formik>

      <Link to="/login">Ya tienes cuenta</Link>
    </div>
  );
};

export default RegisterUser;
