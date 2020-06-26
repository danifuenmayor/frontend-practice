import * as Yup from "yup";
const CreateBrandSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Deben ser al menos 2 caracteres")
    .max(40, "Deben ser menos de 40 caracteres")
    .required("Este campo es obligatorio"),
  image: Yup.mixed().required("La imagen es obligatoria"),
});
export default CreateBrandSchema;
