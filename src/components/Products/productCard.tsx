import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Button,
  CardActions,
  CardContent,
  Typography,
  Box,
  Chip,
  Grid,
} from "@material-ui/core";

import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    height: 410,
    borderRadius: "10%",
    objectFit: "contain",
    margin: theme.spacing(7),
  },
  image: {
    width: 300,
    height: 200,
    objectFit: "contain",
  },
  content: {
    width: 300,
    height: 120,
  },
  inactive: {
    backgroundColor: "rgba(217,83,79,1)",
    color: "secondary",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "rgba(120,254,224,1)",
    fontWeight: "bold",
  },
}));

function capitalizeFirstLetter(string: any) {
  return string[0].toUpperCase() + string.slice(1);
}

const ProductCard = (props: any) => {
  const user = useSelector((state: RootState) => state.user);
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="img"
            className={classes.image}
            image={props.product.image}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="body1" component="h5">
              {props.product &&
                props.product.name &&
                capitalizeFirstLetter(props.product.name.toLowerCase())}
            </Typography>
            <Typography gutterBottom variant="body1" component="h5">
              {`Precio: ${props.product.price}`}
            </Typography>
            <Typography gutterBottom variant="body1" component="h5">
              {`Comisión: ${props.product.commission}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h4">
              {props.product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box>
            <Button
              href={`/products/${props.product.id}/sales/`}
              size="small"
              color="primary"
            >
              Vender
            </Button>
          </Box>
          {!!user && user.role === "admin" && (
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  href={`/products/${props.product.id}`}
                  size="small"
                  color="primary"
                >
                  Editar producto
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Chip
                  label={
                    props.product.isActive ? "Disponible" : "No Disponible"
                  }
                  className={
                    props.product.isActive ? classes.active : classes.inactive
                  }
                  size="small"
                />
              </Grid>
            </Grid>
          )}
        </CardActions>
      </Card>
    </>
  );
};
export default ProductCard;
