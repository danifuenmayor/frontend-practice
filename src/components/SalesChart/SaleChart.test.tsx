import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Tabs from "@material-ui/core/Tabs";
import SalesChart from "./SalesChart";
import SalesChartLine from "./SalesChartLine";
import SalesChartPie from "./SaleChartPie";
import SalesRanking from "./SalesRanking";
import SalesChartMixedData from "./SalesChartLineMixedData";

describe("testing main sales chart component", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  let pieChart: ReactWrapper;
  let lineChart: ReactWrapper;
  let mixedChart: ReactWrapper;
  let salesRanking: ReactWrapper;
  const mockStore = configureStore();

  beforeEach(() => {
    const store = mockStore({
      user: { accessToken: "someToken", role: "admin" },
      sales: {
        sales: [
          {
            name: "DANIELA",
            lastName: "FUENMAYOR",
            rut: "181201649",
            phone: "123456789",
            address: "Santa Paula 875, Las Condes, Chile",
            productId: {
              name: "ESTUFA",
              price: 100000,
              image:
                "https://upload-file-mern.s3.us-west-2.amazonaws.com/metrogas.png",
              description: "Estufa mega potente 2000wts",
              commission: 10000,
              brandId: {
                name: "METROGAS S.A",
                image:
                  "https://upload-file-mern.s3.us-west-2.amazonaws.com/metrogas.png",
                createdAt: "2020-06-16T21:13:54.203Z",
                id: "5ee936128dfd319fffc02fa2",
              },
              sku: "f25e9615",
              createdAt: "2020-06-26T19:01:32.176Z",
              updatedAt: "2020-06-26T19:01:32.176Z",
              id: "5ef6460cf98acf2404cb4f75",
            },
            userId: {
              isActive: true,
              role: "user",
              email: "vlarrondo1@gmail.com",
              name: "MAGDALENA",
              lastName: "LARRONDO",
              createdAt: "2020-06-19T13:21:46.191Z",
              updatedAt: "2020-06-19T13:21:46.191Z",
              id: "5eecbbeaa6838d07e0bce2cb",
            },
            createdAt: "2020-07-06T23:14:18.427Z",
            id: "5f03b04a70e42f1c88e25a81",
          },
        ],
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/sales-charts"]}>
          <SalesChart>
            <SalesChartPie />
            <SalesChartLine />
            <SalesChartMixedData />
            <SalesRanking />
          </SalesChart>
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(SalesChart);
  });
  test("should render component correctly", () => {
    expect(container.length).toBeTruthy();
  });
  test("should render lineChart when the view renders", () => {
    lineChart = container.find(SalesChartLine);
    expect(lineChart.length).toBeTruthy();
  });
  test("should change from daily view to monthly", async () => {
    let lineChartButton = container
      .find(SalesChartLine)
      .find('button[type="button"]');
    lineChartButton.simulate("click");
    container.update();
    await (() => {
      lineChart = container.find(SalesChartLine).find('button[type="button"]');
      expect(lineChart.text()).toEqual("Mostrar por día");
    });
  });
  test("should render Pie Chart when clicked in tab", async () => {
    const pieButtonTab = container
      .find(Tabs)
      .find('[label="Total de ventas por marca"]')
      .first();
    pieButtonTab.simulate("click");
    container.update();
    pieChart = container.find(SalesChartPie);
    await (() => {
      expect(pieChart.length).toBeTruthy();
    });
  });
  test("should render Mixed Chart when clicked in tab", async () => {
    const mixedButtonTab = container
      .find(Tabs)
      .find('[label="Comisiones e Ingresos"]')
      .first();
    mixedButtonTab.simulate("click");
    container.update();
    mixedChart = container.find(SalesChartMixedData);
    await (() => {
      expect(mixedChart.length).toBeTruthy();
    });
  });
  test("should render sales raking", async () => {
    const salesRankingTab = container
      .find(Tabs)
      .find('[label="Usuari@s con más ventas"]')
      .first();
    salesRankingTab.simulate("click");
    container.update();
    salesRanking = container.find(SalesRanking);
    await (() => {
      expect(salesRanking).toBeTruthy();
    });
  });
});
