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

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    height: 500,
    borderRadius: "10%",
    objectFit: "contain",
    margin: theme.spacing(7),
  },
}));

const ProductCard = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" alt="img" image={props.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              {`Precio: ${props.product.price}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              {`Comisión: ${props.product.comission}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h4">
              {props.product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box>
            <Button size="small" color="primary">
              Vender
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};
export default ProductCard;
