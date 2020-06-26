import React from "react";
import {
  Typography,
  Box,
  // Button,
  makeStyles,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import vtrImage from "../images/vtr.png";
import metrogasImage from "../images/metrogas.png";
import maxusImage from "../images/maxus.png";
import happypersonImage from "../images/happyperson.jpg";
import mundangoImage from "../images/mundango.png";
import classes from "../App/App.module.scss";
import BrandCard from "./BrandCard";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 400,
    height: 250,
    objectFit: "contain",
    margin: theme.spacing(4),
  },
}));

const Home = (props: any) => {
  const style = useStyles();
  return (
    <div className={classes.home}>
      <Box m={4} color="secondary">
        <Typography variant="h2" align="center" color="secondary">
          Bienvenido a Selyt
        </Typography>
      </Box>
      <Grid container>
        <Grid xs={6}>
          <Box m={4}>
            <Typography color="primary" variant="h4">
              Conviertete en Selyt y gana dinero fácil y rápido. Registrate en
              la applicación hoy!
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Card className={style.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={happypersonImage}
                title="brand"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Box m={4} color="secondary.light">
        <Typography variant="h2" align="center" color="secondary">
          Conoce nuestras marcas
        </Typography>
      </Box>
      <Grid container>
        <BrandCard />
      </Grid>
    </div>
  );
};
export default Home;
