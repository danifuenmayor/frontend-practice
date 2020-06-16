import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, "Deben ser al menos 10 caracteres")
    .max(40, "Deben ser menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .min(6, "Deben ser al menos 6 caracteres")
    .max(10, "Deben ser menos de 10 caracteress")
    .required("Este campo es obligatorio"),
});
export default LoginSchema;
