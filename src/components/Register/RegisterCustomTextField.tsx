import React from "react";
import { useField, ErrorMessage } from "formik";
import { FormGroup, Box, TextField } from "@material-ui/core";

const CustomTextField = (props: any) => {
  const { label, type } = props;
  const [field] = useField(props);

  return (
    <Box marginBottom={3}>
      <FormGroup>
        <TextField
          margin="dense"
          label={label}
          variant="outlined"
          inputProps={field}
          type={type}
        ></TextField>
        <ErrorMessage name={props.name} />
      </FormGroup>
    </Box>
  );
};

export default CustomTextField;
