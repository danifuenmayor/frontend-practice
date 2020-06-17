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
// function capitalizeFirstLetter(string: any) {
//   return string[0].toUpperCase() + string.slice(1);
// }

const AdminProfile = (props: any) => {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.user);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary">
          Nombre completo:
        </Typography>
        <Typography variant="h5" component="h4">
          {user && user.name && user.name.toLowerCase()}
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
          href="/show-users"
          size="small"
          variant="outlined"
          color="secondary"
        >
          Ver todos los usuarios
        </Button>
        <Button
          href="/show-users"
          size="small"
          variant="outlined"
          color="secondary"
        >
          Ver marcas
        </Button>
        <Button
          href="/show-users"
          size="small"
          variant="outlined"
          color="secondary"
        >
          Ver ventas
        </Button>
      </CardActions>
    </Card>
  );
};
export default AdminProfile;
