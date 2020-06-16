import React from "react";
import { useSelector } from "react-redux";

const UserProfile = (props: any) => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return <h1>Hello World</h1>;
};
export default UserProfile;
