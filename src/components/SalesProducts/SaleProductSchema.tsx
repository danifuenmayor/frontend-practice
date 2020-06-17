import * as Yup from "yup";

const SaleProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Deben ser al menos 3 caracteres")
    .max(20, "Deben ser menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  lastName: Yup.string()
    .min(2, "Deben ser al menos 2 caracteres")
    .max(12, "Deben ser menos de 12 caracteres")
    .required("Este campo es obligatorio"),
  rut: Yup.string()
    .min(10, "Deben ser al menos 10 caracteres")
    .max(20, "Deben ser menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  phone: Yup.string()
    .min(6, "Faltan números")
    .max(20, "Muy largo")
    .required("Este campo es obligatorio"),
  address: Yup.string()
    .min(5, "Deben ser al menos 5 caracteres")
    .max(20, "Deben ser menos de 20 caracteres")
    .required("Este campo es obligatorio"),
});
export default SaleProductSchema;