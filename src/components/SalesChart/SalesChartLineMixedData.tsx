import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useHistory } from "react-router-dom";
import { GET_SALES } from "../../reducers/sales/types";
import { Button } from "@material-ui/core";

const SalesChartMixedData = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const salesState = useSelector((state: RootState) => state.sales.sales);
  const [time, setTime] = useState(7);

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
    if (!commissiondata.hasOwnProperty(x.createdAt.slice(0, time))) {
      commissiondata[x.createdAt.slice(0, time)] = 0;
    }
    if (x.createdAt.slice(0, time) in commissiondata) {
      x.productId &&
        (commissiondata[x.createdAt.slice(0, time)] += x.productId.commission);
    }
  }

  for (let x of salesState) {
    if (!pricedata.hasOwnProperty(x.createdAt.slice(0, time))) {
      pricedata[x.createdAt.slice(0, time)] = 0;
    }
    if (x.createdAt.slice(0, time) in pricedata) {
      x.productId &&
        (pricedata[x.createdAt.slice(0, time)] += x.productId.price);
    }
  }

  const sortObj: any = (obj: any) => {
    if (typeof obj !== "object" || obj === null) return obj;

    if (Array.isArray(obj)) return obj.map((e) => sortObj(e)).sort();

    return Object.keys(obj)
      .sort()
      .reduce((sorted: any, k: any) => {
        sorted[k] = sortObj(obj[k]);
        return sorted;
      }, {});
  };

  const commissiondataSort: any = sortObj(commissiondata);
  const pricedataSort: any = sortObj(pricedata);

  const data = {
    datasets: [
      {
        label: "Comisión",
        type: "line",
        data: [...Object.values(commissiondataSort)],
        fill: false,
        borderColor: "#614ad3",
        backgroundColor: "#d9d9f3",
        pointBorderColor: "#b689b0",
        pointBackgroundColor: "#fe5f55",
        pointHoverBackgroundColor: "#EC932F",
        pointHoverBorderColor: "#EC932F",
        yAxisID: "y-axis-2",
      },
      {
        label: `Ventas Totales Por ${time === 7 ? "Día" : "Mes"}`,
        type: "bar",
        data: [...Object.values(pricedataSort)],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "#71B37C",
        hoverBackgroundColor: "#1ee3cf",
        hoverBorderColor: "#71B37C",
        yAxisID: "y-axis-1",
      },
    ],
  };

  const options = {
    responsive: true,
    labels: [...Object.keys(commissiondataSort)],
    tooltips: {
      mode: "label",
    },
    elements: {
      line: {
        fill: false,
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: true,
          },

          labels: [...Object.keys(commissiondataSort)],
        },
      ],
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          gridLines: {
            display: true,
          },
          labels: {
            show: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            display: false,
          },
          labels: {
            show: true,
          },
        },
      ],
    },
  };

  const plugins = [
    {
      afterDraw: (chartInstance: any, easing: any) => {
        const { ctx } = chartInstance.chart;
        // ctx.fillText("This text drawn by a plugin", 100, 100);
      },
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <h2>Ventas y Total de Comisiones por Marcas</h2>
      <Bar data={data} options={options} plugins={plugins} />
      <Button color="secondary" onClick={() => setTime(time === 7 ? 10 : 7)}>
        {time === 7 ? "Mostrar por día" : " Mostrar por mes"}
      </Button>
    </div>
  );
};

export default SalesChartMixedData;
