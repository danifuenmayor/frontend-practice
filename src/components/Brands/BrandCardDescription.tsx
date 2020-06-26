import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { RootState } from "../../reducers";
import { useSelector } from "react-redux";

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
  const userState = useSelector((state: RootState) => state.user);
  const classes = useStyles();
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
        <CardContent>
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
          href={`brands/${props.id}/products/`}
          size="small"
          color="primary"
        >
          Productos
        </Button>
        {userState.role === "admin" && (
          <Button href={`brands/${props.id}`} size="small" color="primary">
            Editar Marca
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default BrandCardDescription;
