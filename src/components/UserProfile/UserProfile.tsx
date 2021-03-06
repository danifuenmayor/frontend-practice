import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    margin: "auto",
    marginTop: 25,
  },
  title: {
    fontSize: 20,
  },
});
function capitalizeFirstLetter(string: any) {
  return string[0].toUpperCase() + string.slice(1);
}

const UserProfile = (props: any) => {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      {!!user &&
      user.role &&
      user.role === "user" &&
      user.accessToken !== "" ? (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="secondary">
              Nombre completo:
            </Typography>
            <Typography variant="h5" component="h4">
              {capitalizeFirstLetter(user.name.toLowerCase())}{" "}
              {capitalizeFirstLetter(user.lastName.toLowerCase())}
            </Typography>
            <Typography className={classes.title} color="secondary">
              Correo electronico:
            </Typography>
            <Typography variant="h5" component="h4">
              {user.email.toLowerCase()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              href="/edit-profile"
              size="small"
              variant="outlined"
              color="secondary"
            >
              Editar perfil
            </Button>
            <Button
              href="/brands"
              size="small"
              variant="outlined"
              color="secondary"
            >
              Ver marcas
            </Button>
            <Button
              href="/sales-chart-line"
              size="small"
              variant="outlined"
              color="secondary"
            >
              Ver ventas
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Typography
          variant="h2"
          color="secondary"
          align="center"
          className={classes.root}
        >
          No eres un usuario o no has iniciado sesión
        </Typography>
      )}
    </>
  );
};
export default UserProfile;
