import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
        <Box m={5}>
          <Typography variant="h2" align="center" color="secondary">
            Brands
          </Typography>
        </Box>

        <div>
          <Brands brands={brandsState} />
        </div>
        <br />
        <Box m={5}>
          <Button
            variant="outlined"
            onClick={
              userState.role === "admin"
                ? () => history.push("/admin-profile")
                : () => history.push("/user-profile")
            }
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
