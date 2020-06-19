import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Container, Typography, Card } from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";

const SalesChart = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch({
      type: GET_SALES,
    });
  }, [dispatch]);

  const salesState = useSelector((state: RootState) => state.sales.sales);

  return (
    <div>
      <Container>
        <Typography>SALES CHART</Typography>
      </Container>
    </div>
  );
};

export default SalesChart;
