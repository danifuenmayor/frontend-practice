import React from "react";
import { Container } from "@material-ui/core";
import BrandCardDescription from "./BrandCardDescription";
import { Grid } from "@material-ui/core";

const Brands = (props: any) => {
  return (
    <Container>
      <Grid container>
        <div>
          {props.brands.map((brand: any) => {
            return (
              <BrandCardDescription
                key={brand.id}
                title={brand.name}
                image={brand.image}
                id={brand.id}
              />
            );
          })}
        </div>
      </Grid>
    </Container>
  );
};

export default Brands;
