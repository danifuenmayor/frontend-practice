import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Products from "./products";

import {
  getProducts,
  getProductsSuccess,
  getProductsFail,
} from "../../reducers/products/actions";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../../reducers/products/types";
describe("actions create Product", () => {
  it("should create an action post product", () => {
    const expectedAction = {
      type: GET_PRODUCTS,
    };
    expect(getProducts()).toEqual(expectedAction);
  });
  it("should return an action post product success", () => {
    const product = {
      name: "Product 1",
      price: 20,
      commission: 1,
      description: "Image Description",
      image: "http://image.er",
    };
    const expectedAction = {
      type: GET_PRODUCTS_SUCCESS,
      payload: [product],
    };
    expect(getProductsSuccess([product])).toEqual(expectedAction);
  });
  it("should return an action post product fail", () => {
    const product = {
      name: "Product 1",
      price: 20,
      commission: 1,
      description: "Image Description",
      image: "http://image.er",
    };
    const expectedAction = {
      type: GET_PRODUCTS_FAIL,
      payload: product,
    };
    expect(getProductsFail(product)).toEqual(expectedAction);
  });
});

describe("ProductList", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  const mockStore = configureStore();
  const store = mockStore({
    products: {},
  });
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/123/create-product"]}>
          <Products />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(Products);
  });
  it("should render component ", () => {
    expect(container.length).toBeTruthy();
  });
});
