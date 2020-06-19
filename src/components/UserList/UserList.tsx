import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USERS } from "../../reducers/admin/types";
import { RootState } from "../../reducers";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import UserCard from "./UserCard";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    margin: "auto",
    marginTop: 25,
  },
  title: {
    fontSize: 40,
    marginTop: 25,
  },
  button: {
    marginTop: 25,
  },
});

const UserList = (props: any) => {
  const history = useHistory();
  const users = useSelector((state: RootState) => state.admin.users[0]);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_USERS,
    });
  }, [dispatch]);
  return (
    <Container>
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        onClick={() => history.goBack()}
      >
        Volver
      </Button>
      <Typography color="secondary" className={classes.title} align="center">
        Users
      </Typography>
      {!!users &&
        users
          .filter((user: any) => user.role === "user")
          .map((user: any) => {
            return <UserCard key={user.id} user={user} />;
          })}
    </Container>
  );
};
export default UserList;
