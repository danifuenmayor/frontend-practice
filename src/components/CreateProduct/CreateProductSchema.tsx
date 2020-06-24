import * as Yup from "yup";

const CreateProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Deben ser al menos 3 caracteres")
    .max(20, "Deben ser menos de 20 caracteres")
    .required("Este campo es obligatorio"),
  description: Yup.string()
    .min(20, "Deben ser al menos 20 caracteres")
    .max(40, "Deben ser menos de 40 caracteress")
    .required("Este campo es obligatorio"),
  price: Yup.number().required("Este campo es obligatorio"),
  commission: Yup.number().required("Este campo es obligatorio"),
  image: Yup.mixed().required("La imagen es obligatoria"),
});
export default CreateProductSchema;
