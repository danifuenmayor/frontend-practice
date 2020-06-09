// const LabelComponent = ({labelValue, changeLabelOnClick}) => (
// <Label> { labelValue } </label>;
// <Button onClick={changeLabelOnClick('bye')}> Click Me </Button>
// );

import React from "react";
import { Link } from "react-router-dom";

const LoginUser = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Link to="/brands">¿No tienes cuenta? Regístrate</Link>
    </div>
  );
};

export default LoginUser;
