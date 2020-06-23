import Yup from "yup";

const EditBrandSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Deben ser al menos un caracter")
    .max(40, "Deben ser menos de 40 caracteres"),
});

export default EditBrandSchema;
