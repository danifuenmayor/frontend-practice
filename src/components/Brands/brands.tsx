import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import BrandCardDescription from "./BrandCardDescription";
import { Grid } from "@material-ui/core";

const Brands = (props: any) => {
  return (
    <Container>
      <CssBaseline />
      <Grid container  spacing={1}>
        {props.brands.map((brand: any) => {
          return (
            <Grid item xs={12} sm={4}>
              <BrandCardDescription
                key={brand.id}
                title={brand.name}
                image={brand.image}
                id={brand.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Brands;
