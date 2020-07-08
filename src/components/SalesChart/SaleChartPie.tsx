import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Box } from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";
import { Pie } from "react-chartjs-2";

const SalesChartPie = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const history = useHistory();
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
  const loading = useSelector((state: RootState) => state.sales.loading);

  let data: any = {};
  if (userState.role === "admin") {
    if (!loading) {
      for (let x of salesState) {
        if (!data.hasOwnProperty(x.productId?.brandId.name)) {
          data[x.productId?.brandId.name] = 0;
        }
        if (x.productId?.brandId.name in data) {
          data[x.productId?.brandId.name] += 1;
        }
      }
    }
  }

  const dataChart = {
    labels: [...Object.keys(data)],
    datasets: [
      {
        label: "Ventas",
        data: [...Object.values(data)],
        backgroundColor: ["#d5a4cf", "#614ad3", "#b689b0"],
      },
    ],
  };

  return (
    <Box mx="auto" p={1}>
      {userState.role === "admin" && (
        <Pie
          data={dataChart}
          options={{
            title: {
              display: true,
              text: "Ventas por Marcas",
              fontSize: 20,
            },
          }}
        />
      )}
    </Box>
  );
};
export default SalesChartPie;
