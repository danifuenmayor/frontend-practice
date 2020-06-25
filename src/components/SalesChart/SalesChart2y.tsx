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
  useEffect(() => {
    if (userState.accessToken !== "") {
      dispatch({
        type: GET_SALES,
      });
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userState.accessToken]);
  let commissiondata: any = {};
  let pricedata: any = {};

  for (let x of salesState) {
    if (!commissiondata.hasOwnProperty(x.createdAt.slice(0, 7))) {
      commissiondata[x.createdAt.slice(0, 7)] = 0;
    }
    if (x.createdAt.slice(0, 7) in commissiondata) {
      x.productId &&
        (commissiondata[x.createdAt.slice(0, 7)] += x.productId.commission);
    }
  }

  for (let x of salesState) {
    if (!pricedata.hasOwnProperty(x.createdAt.slice(0, 7))) {
      pricedata[x.createdAt.slice(0, 7)] = 0;
    }
    if (x.createdAt.slice(0, 7) in pricedata) {
      x.productId && (pricedata[x.createdAt.slice(0, 7)] += x.productId.price);
    }
  }

  console.log(commissiondata);
  console.log(pricedata);

  return (
    <div>
      <Container>
        <Typography variant="h2">ADMIN CHART</Typography>
        <div>
          <Box color="secondary">
            {userState.role === "admin" && (
              <Line
                data={{
                  labels: [...Object.keys(commissiondata)],
                  datasets: [
                    {
                      type: "line",
                      label: "Commission",
                      id: "Commission",
                      data: [...Object.values(commissiondata)],
                      backgroundColor: ["rgba(75,192,192,0.6)"],
                    },
                    {
                      type: "line",
                      label: "Total Sales Per Month",
                      id: "Total Sales Per Month",
                      data: [...Object.values(pricedata)],
                      backgroundColor: ["rgba(228,23,73,1)"],
                    },
                  ],
                  options: {
                    scales: {
                      yAxes: [
                        {
                          id: "Commission",
                          type: "linear",
                          position: "left",
                        },
                        {
                          id: "Total Sales Per Month",
                          type: "linear",
                          position: "right",
                          ticks: {
                            max: 100,
                            min: 0,
                          },
                        },
                      ],
                    },
                  },
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
