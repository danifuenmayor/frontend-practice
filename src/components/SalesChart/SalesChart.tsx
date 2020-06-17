import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";

const SalesChart = () => {
  const history = useHistory();
  const userState = useSelector((state: RootState) => state.sales.sales);
  const dispatch = useDispatch();
  
  return (
    <div>
      <Container>
        <Typography>SALES CHART</Typography>
      </Container>
    </div>
  );
};

export default SalesChart;
