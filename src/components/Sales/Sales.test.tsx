import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Sales from "./Sales";

import {
  getSales,
  getSalesSuccess,
  getSalesFail,
  setSale,
  setSaleSuccess,
  setSaleFail,
} from "../../reducers/sales/actions";
import {
  GET_SALES,
  GET_SALES_SUCCESS,
  GET_SALES_FAIL,
  SALE_PRODUCT,
  SALE_PRODUCT_SUCCESS,
  SALE_PRODUCT_FAIL,
} from "../../reducers/sales/types";

describe("testing sales actions", () => {
  const someSales = {
    name: "someName",
    lastName: "someLastName",
    rut: "someRut",
    phone: "someNumber",
    address: "someAddress",
    accessToken: "someToken",
    productId: "someProductId",
    sales: [],
  };
  test("should retun sale creation action", () => {
    const expectedAction = {
      type: SALE_PRODUCT,
      payload: someSales,
    };
    expect(setSale(someSales)).toBe(expectedAction);
  });
  test("should return success sale creation action", () => {
    const expectedAction = {
      type: SALE_PRODUCT_SUCCESS,
      payload: someSales,
    };
    expect(setSaleSuccess(someSales)).toBe(expectedAction);
  });
  test("should return fail sale creation action", () => {
    const expectedAction = {
      type: SALE_PRODUCT_FAIL,
      payload: "someError",
    };
    expect(setSaleFail("someError")).toBe(expectedAction);
  });
  test("should return get sales action", () => {
    const expectedAction = {
      type: GET_SALES,
      payload: someSales,
    };
    expect(getSales(someSales)).toBe(expectedAction);
  });
  test("should return get sales success action", () => {
    const expectedAction = {
      type: GET_SALES_SUCCESS,
      payload: someSales,
    };
    expect(getSalesSuccess(someSales)).toBe(expectedAction);
  });
  test("should return get sales fail action", () => {
    const expectedAction = {
      type: GET_SALES_FAIL,
      payload: "someError",
    };
    expect(getSalesFail("someError")).toBe(expectedAction);
  });
});
