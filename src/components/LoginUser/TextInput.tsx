import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

const TextInput = (props: any) => {
  const { label } = props;
  const { type } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        margin="dense"
        id="outlined-basic"
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
