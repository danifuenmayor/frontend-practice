import * as Yup from "yup";

const AdminEditUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Deben ser al menos 3 caracteres")
    .max(20, "Deben ser menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  lastName: Yup.string()
    .min(3, "Deben ser al menos 6 caracteres")
    .max(30, "Deben ser menos de 12 caracteress")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .min(10, "Deben ser al menos 10 caracteres")
    .max(40, "Deben ser menos de 40 caracteres")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .min(5, "Deben ser al menos 5 caracteres")
    .max(20, "Deben ser menos de 20 caracteres"),
});
export default AdminEditUserSchema;
