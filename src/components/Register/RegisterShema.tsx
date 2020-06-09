import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  email: Yup.string().email(" It's not a valid mail").required("Required"),
  rut: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default RegisterSchema;
