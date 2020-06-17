import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

// Puedes crear componentes customizados con Formik. También en el se describen las acciones y lo que sucederá.
const TextInput = (props: any) => {
  const { type, name, label } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        margin="dense"
        name={name}
        label={label}
        variant="outlined"
        inputProps={field}
        type={type}
      >
        <input className="text-input" />
      </TextField>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export default TextInput;
