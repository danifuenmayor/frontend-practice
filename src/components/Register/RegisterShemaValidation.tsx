import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  rut: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(10, "Must be shorter than 10 character")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Password must match")
    .required("Please, confirm your password"),
});

export default RegisterSchema;
