import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";
import { Line } from "react-chartjs-2";

const SalesChartLine = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const salesState = useSelector((state: RootState) => state.sales.sales);

  useEffect(() => {
    if (userState.accessToken !== "") {
      dispatch({
        type: GET_SALES,
      });
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userState.accessToken]);

  let data: any = {};
  if (userState.role === "user") {
    for (let x of salesState) {
      if (!data.hasOwnProperty(x.createdAt.slice(0, 10))) {
        data[x.createdAt.slice(0, 10)] = 0;
      }
      if (x.createdAt.slice(0, 10) in data) {
        x.productId &&
          (data[x.createdAt.slice(0, 10)] += x.productId.commission);
      }
    }
  } else {
    for (let x of salesState) {
      if (!data.hasOwnProperty(x.createdAt.slice(0, 10))) {
        data[x.createdAt.slice(0, 10)] = 0;
      }
      if (x.createdAt.slice(0, 10) in data) {
        x.productId && (data[x.createdAt.slice(0, 10)] += x.productId.price);
      }
    }
  }
  return (
    <Box mx="auto" p={1}>
      {userState.role === "user" ? (
        <Line
          data={{
            labels: [...Object.keys(data)],
            datasets: [
              {
                label: "Commision",
                data: [...Object.values(data)],
                backgroundColor: ["rgba(75,192,192,0.6)"],
              },
            ],
          }}
        />
      ) : (
        <Line
          data={{
            labels: [...Object.keys(data)],
            datasets: [
              {
                label: "Total Sales Per Day",
                data: [...Object.values(data)],
                backgroundColor: ["rgba(75,192,192,0.6)"],
              },
            ],
          }}
        />
      )}
    </Box>
  );
};
export default SalesChartLine;
