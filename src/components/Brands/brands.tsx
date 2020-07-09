import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { Container, CssBaseline, Grid, Button } from "@material-ui/core";
import BrandCardDescription from "./BrandCardDescription";
import { useHistory } from "react-router-dom";

const Brands = (props: any) => {
  const history = useHistory();

  const user = useSelector((state: RootState) => state.user);

  return (
    <Container>
      <CssBaseline />
      {user && user.role === "admin" ? (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button
              id="create-brand"
              test-label="create-brand"
              variant="outlined"
              color="primary"
              onClick={() => history.push(`/create-brand`)}
            >
              Crear nueva Marca
            </Button>
          </Grid>
          {Array.isArray(props.brands) &&
            props.brands.map((brand: any) => {
              return (
                <Grid item xs={12} sm={4}>
                  <BrandCardDescription
                    key={brand.id}
                    title={brand.name}
                    image={brand.image}
                    id={brand.id}
                    isActive={brand.isActive}
                  />
                </Grid>
              );
            })}
        </Grid>
      ) : (
        <Grid container spacing={1}>
          {Array.isArray(props.brands) &&
            props.brands
              .filter((brand: any) => brand.isActive === true)
              .map((brand: any) => {
                return (
                  <Grid item xs={12} sm={4}>
                    <BrandCardDescription
                      key={brand.id}
                      title={brand.name}
                      image={brand.image}
                      id={brand.id}
                      isActive={brand.isActive}
                    />
                  </Grid>
                );
              })}
        </Grid>
      )}
    </Container>
  );
};

export default Brands;
