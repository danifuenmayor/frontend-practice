import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 300,
    margin: theme.spacing(2),
    objectFit: "contain",
    borderRadius: "10%",
  },
}));

const BrandCardDescription = (props: any) => {
  const classes = useStyles();
  const urlServer = "http://localhost:4200/brands/";
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
          title={props.title}
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem Ipsum
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          // onClick={(e) => props.setProducts(e, props.id)}
          href={`${urlServer}${props.id}/products/`}
          size="small"
          color="primary"
        >
          Productos
        </Button>
      </CardActions>
    </Card>
  );
};

export default BrandCardDescription;
