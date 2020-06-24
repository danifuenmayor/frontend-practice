import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Container, Typography, Box } from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";
import { Line } from "react-chartjs-2";
const AdminChart = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const salesState = useSelector((state: RootState) => state.sales.sales);
  console.log(salesState);
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
      if (!data.hasOwnProperty(x.createdAt.slice(0, 7))) {
        data[x.createdAt.slice(0, 7)] = 0;
      }
      if (x.createdAt.slice(0, 7) in data) {
        x.productId &&
          (data[x.createdAt.slice(0, 7)] += x.productId.commission);
      }
    }
  } else {
    for (let x of salesState) {
      if (!data.hasOwnProperty(x.createdAt.slice(0, 7))) {
        data[x.createdAt.slice(0, 7)] = 0;
      }
      if (x.createdAt.slice(0, 7) in data) {
        x.productId && (data[x.createdAt.slice(0, 7)] += x.productId.price);
      }
    }
  }

  return (
    <div>
      <Container>
        <Typography variant="h2">ADMIN CHART</Typography>
        <div>
          <Box color="secondary">
            {userState.role === "admin" && (
              <Line
                data={{
                  labels: [...Object.keys(data)],
                  datasets: [
                    {
                      label: "Commission",
                      yAxisID: "Commission",
                      data: [...Object.values(data)],
                      backgroundColor: ["rgba(75,192,192,0.6)"],
                    },
                    {
                      label: "Total Sales Per Month",
                      yAxisID: "Total Sales Per Month",
                      data: [...Object.values(data)],
                      backgroundColor: ["rgba(85, 172, 193, 0.6)"],
                    },
                  ],
                }}
              />
            )}
          </Box>
        </div>
      </Container>
    </div>
  );
};
export default AdminChart;
