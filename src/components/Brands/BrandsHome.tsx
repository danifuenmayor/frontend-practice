import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { RootState } from "../../reducers";
import { GET_ALL_BRANDS } from "../../reducers/brands/types";
import { useSelector, useDispatch } from "react-redux";
import Brands from "./brands";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";

const BrandsHome = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userState.accessToken !== "") {
      dispatch({
        type: GET_ALL_BRANDS,
      });
    } else {
      props.history.push("/login");
    }
  }, [dispatch, props.history, userState.accessToken]);

  const brandsState = useSelector((state: RootState) => state.brands.brands);

  return (
    <>
      <div className="brands">
        <Typography variant="h2">Brands</Typography>
        <div>
          <Brands brands={brandsState} />
        </div>
        <br />
        <Box mt={5}>
          <Button
            variant="outlined"
            onClick={() => history.push("/user-profile")}
            color="secondary"
          >
            Volver a mi perfil
          </Button>
        </Box>
      </div>
    </>
  );
};

export default BrandsHome;
