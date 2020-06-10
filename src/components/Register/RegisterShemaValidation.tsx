import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  rut: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 5 characters")
    .max(10, "Must be shorter than 10 character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Password must match")
    .required("Password confirm is required"),
});

export default RegisterSchema;
