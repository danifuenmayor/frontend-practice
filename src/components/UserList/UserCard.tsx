import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";

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
      <CardActions></CardActions>
    </Card>
  );
};
export default UserCard;
