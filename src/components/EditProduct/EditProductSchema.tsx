import * as Yup from "yup";

const EditProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(10, "Deben ser al menos 10 caracteres")
    .max(40, "Deben ser menos de 40 caracteres")
    .required("Este campo es obligatorio"),
  description: Yup.string()
    .min(6, "Deben ser al menos 6 caracteres")
    .max(40, "Deben ser menos de 40 caracteress")
    .required("Este campo es obligatorio"),
  price: Yup.number().required("Este campo es obligatorio"),
  commission: Yup.number().required("Este campo es obligatorio"),
});
export default EditProductSchema;
