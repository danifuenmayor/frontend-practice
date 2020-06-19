import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Container, Typography, Box } from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";

const SalesChart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((state: RootState) => state.user);
  
  useEffect(() => {
    if (userState.accessToken !== "") {
      dispatch({
        type: GET_SALES,
      });
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userState.accessToken]);

  const salesState = useSelector((state: RootState) => state.sales.sales);

  return (
    <div>
      <Container>
        <Typography>SALES CHART</Typography>
        <Box color="secondary"></Box>
        <div></div>
      </Container>
    </div>
  );
};
export default SalesChart;
