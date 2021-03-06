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
import { Grid, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    height: 300,
    margin: theme.spacing(2),
    objectFit: "contain",
    borderRadius: "10%",
  },
  content: {
    height: 70,
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
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container>
          <Grid item xs>
            <Button
              href={`brands/${props.id}/products/`}
              size="small"
              color="primary"
            >
              Productos
            </Button>
          </Grid>
          <Grid container item xs justify="center" alignItems="center">
            {userState.role === "admin" && (
              <>
                <Button
                  href={`brands/${props.id}`}
                  size="small"
                  color="primary"
                >
                  Editar Marca
                </Button>
                <Chip
                  label={props.isActive ? "Disponible" : "No Disponible"}
                  className={props.isActive ? classes.active : classes.inactive}
                  size="small"
                />
              </>
            )}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default BrandCardDescription;
