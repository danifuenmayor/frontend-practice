import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Debe contener al menos 2 caracteres")
    .max(40, "Debe contener menos de 40 caracteres")
    .required("Campo Obligatorio"),
  lastName: Yup.string()
    .min(3, "Debe contener al menos dos caracteres")
    .max(40, "Debe contener menos de 40 caracteres")
    .required("Campo Obligatorio"),
  email: Yup.string().email().required("Campo Obligatorio"),
  password: Yup.string()
    .min(6, "Debe contener al menos 6 caracteres")
    .max(12, "Debe ser menos de 13 caracteres")
    .matches(/(?=.*[0-9])/, "Contraseña debe contener al menos un número")
    .required("Contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Contraseña debe coincidir")
    .required("Porfavor confirme contraseña"),
});

export default RegisterSchema;
