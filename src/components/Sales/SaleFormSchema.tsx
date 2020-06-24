import * as Yup from "yup";

const SaleFormSchema = Yup.object().shape({
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
    .min(9, "Faltan números")
    .max(12, "Muy largo")
    .required("Este campo es obligatorio"),
  address: Yup.string().required("Este campo es obligatorio"),
});
export default SaleFormSchema;
