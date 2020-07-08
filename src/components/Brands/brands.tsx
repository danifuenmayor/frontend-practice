import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { Container, CssBaseline, Grid, Button, Box } from "@material-ui/core";
import BrandCardDescription from "./BrandCardDescription";
import { useParams, useHistory } from "react-router-dom";
import { GET_ONE_BRAND } from "../../reducers/brands/types";

// Brands component
const Brands = (props: any) => {
  const history = useHistory();
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const brands = useSelector((state: RootState) => state.brands.brands);
  useEffect(() => {
    dispatch({
      type: GET_ONE_BRAND,
    });
  }, [dispatch]);

  return (
    <Container>
      <CssBaseline />
      {user && user.role === "admin" && (
        <Box ml={120}>
          <Button
            id="create-brand"
            test-label="create-brand"
            variant="outlined"
            color="primary"
            onClick={() => history.push(`/create-brand`)}
          >
            Crear nueva Marca
          </Button>
        </Box>
      )}
      <Grid container spacing={1}>
        {Array.isArray(brands) &&
          props.brands.map((brand: any) => {
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
