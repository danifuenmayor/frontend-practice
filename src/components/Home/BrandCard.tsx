import React, { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { GET_ALL_BRANDS } from "../../reducers/brands/types";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "contain",
    margin: theme.spacing(7),
  },
}));

const BrandCard = (props: any) => {
  const style = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_ALL_BRANDS,
    });
  }, [dispatch]);

  const brandsState: any = useSelector(
    (state: RootState) => state.brands.brands
  );

  return (
    <>
      <CssBaseline />
      {brandsState.map((brand: any) => {
        return (
          <Card key={brand.id} className={style.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="img"
                image={brand.image}
                title={brand.name}
              />
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
};
export default BrandCard;
