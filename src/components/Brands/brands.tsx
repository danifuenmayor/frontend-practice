import React from "react";
import { Container } from "@material-ui/core";
import BrandCardDescription from "./BrandCardDescription";
import { Grid } from "@material-ui/core";

const Brands = (props: any) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <div>
          {props.brands.map((brand: any) => {
            return (
              <BrandCardDescription
                key={brand.id}
                title={brand.title}
                image={brand.image}
                setProducts={props.setProducts}
              />
            );
          })}
        </div>
      </Grid>
    </Container>
  );
};

export default Brands;
