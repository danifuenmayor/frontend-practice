import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import { GET_SALES } from "../../reducers/sales/types";
import { Line } from "react-chartjs-2";

const SalesChartLine = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const salesState = useSelector((state: RootState) => state.sales.sales);
  const [time, setTime] = useState(10);

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
      if (!data.hasOwnProperty(x.createdAt.slice(0, time))) {
        data[x.createdAt.slice(0, time)] = 0;
      }
      if (x.createdAt.slice(0, time) in data) {
        x.productId &&
          (data[x.createdAt.slice(0, time)] += x.productId.commission);
      }
    }
  } else {
    for (let x of salesState) {
      if (!data.hasOwnProperty(x.createdAt.slice(0, time))) {
        data[x.createdAt.slice(0, time)] = 0;
      }
      if (x.createdAt.slice(0, time) in data) {
        x.productId && (data[x.createdAt.slice(0, time)] += x.productId.price);
      }
    }
  }

  return (
    <Box mx="auto" p={1}>
      {userState.role === "user" ? (
        <Box mx="auto" p={6}>
          <Line
            data={{
              labels: [...Object.keys(data)],
              datasets: [
                {
                  label: `Comisión Por ${time === 7 ? "Mes" : "Día"}`,
                  data: [...Object.values(data)],
                  backgroundColor: ["rgba(75,192,192,0.6)"],
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: `Ventas Por ${time === 7 ? "Mes" : "Día"}`,
                fontSize: 20,
              },
            }}
          />
        </Box>
      ) : (
        <Line
          width={60}
          height={20}
          data={{
            labels: [...Object.keys(data)],
            datasets: [
              {
                label: `Ingresos Totales Por ${time === 7 ? "Mes" : "Día"}`,
                data: [...Object.values(data)],
                backgroundColor: ["rgba(75,192,192,0.6)"],
              },
            ],
          }}
          options={{
            responsive: true,
            title: {
              display: true,
              text: `Ingresos Totales Por ${time === 7 ? "Mes" : "Día"}`,
              fontSize: 20,
            },
          }}
        />
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setTime(time === 10 ? 7 : 10)}
      >
        {time === 7 ? "Mostrar por día" : " Mostrar por mes"}
      </Button>
    </Box>
  );
};
export default SalesChartLine;
