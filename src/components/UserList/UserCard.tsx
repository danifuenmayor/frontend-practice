import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";

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
  inactive: {
    backgroundColor: "rgba(217,83,79,1)",
    color: "secondary",
    fontWeight: "bold",
  },
  active: {
    backgroundColor: "rgba(120,254,224,1)",
    fontWeight: "bold",
  },
});
function capitalizeFirstLetter(string: any) {
  return string[0].toUpperCase() + string.slice(1);
}

const UserCard = (props: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary">
          Nombre completo:
        </Typography>
        <Typography variant="h5" component="h4">
          {props.user &&
            props.user.name &&
            capitalizeFirstLetter(props.user.name.toLowerCase())}{" "}
          {props.user &&
            props.user.lastName &&
            capitalizeFirstLetter(props.user.lastName.toLowerCase())}
        </Typography>
        <Typography className={classes.title} color="secondary">
          Correo electronico:
        </Typography>
        <Typography variant="h5" component="h4">
          {props.user.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          data-test="btn-edit-user"
          href={`/show-users/${props.user.id}/edit-user`}
          size="small"
          color="primary"
        >
          Editar usuari@
        </Button>
        <Chip
          label={props.user.isActive ? "Usuario Activo" : "Usuario Inactivo"}
          className={props.user.isActive ? classes.active : classes.inactive}
          size="small"
          icon={<FaceIcon />}
        />
      </CardActions>
    </Card>
  );
};
export default UserCard;
