import React from "react";
import { Link } from "react-router-dom";
// import { RootState } from "../../reducers";
// import { useSelector } from "react-redux";

const Brands = () => {
  // const userState = useSelector((state: RootState) => state.user);
  return (
    <>
      <div className="brands">Brands</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Brands;
