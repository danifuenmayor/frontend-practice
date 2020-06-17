import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_USERS } from "../../reducers/admin/types";

const UserList = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_USERS,
    });
  }, []);
  return <h1>UserList</h1>;
};
export default UserList;
