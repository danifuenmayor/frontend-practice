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
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    height: 400,
    borderRadius: "10%",
    objectFit: "contain",
    margin: theme.spacing(7),
  },
  image: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
  content: {
    width: 200,
    height: 120,
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
            <Button
              href={`/products/${props.product.id}`}
              size="small"
              color="primary"
            >
              Editar producto
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};
export default ProductCard;
