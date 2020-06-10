import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, "Must be at least 10 characters")
    .max(20, "Must be shorter than 20 characters")
    .required("Required"),
  password: Yup.string()
    .min(5, "Must be at least 5 characters")
    .max(10, "Must be shorter than 10 characters")
    .required("Required"),
});
export default LoginSchema;