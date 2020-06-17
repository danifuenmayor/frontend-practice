import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    margin: theme.spacing(2),
    objectFit: "contain",
    borderRadius: "10%",
  },
  media: {
    height: 140,
  },
}));

const BrandCardDescription = (props: any) => {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.title}
            height="140"
            image={props.image}
            title={props.tile}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem Ipsum
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => props.setProducts(props.id)}
            size="small"
            color="primary"
          >
            Productos
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BrandCardDescription;
