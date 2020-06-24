import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextInput from "../TextInput/TextInput";
import { RootState } from "../../reducers";
import { Form } from "formik";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";

const SalesFormData = (props: any) => {
  const userState = useSelector((state: RootState) => state.user);
  return (
    <React.Fragment>
      <Form>
        <Typography color="secondary" variant="h6" gutterBottom>
          Datos de comprador@
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextInput label="Nombre" name="name" type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput label="Apellido" name="lastName" type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput label="Rut" name="rut" type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput label="Número telefónico" name="phone" type="text" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SearchInput label="Dirección" name="address" type="address" />
          </Grid>

          {userState.error ? (
            <span className="errorMessage">
              <p>{userState.error}</p>
            </span>
          ) : null}
        </Grid>
      </Form>
    </React.Fragment>
  );
};
export default SalesFormData;
