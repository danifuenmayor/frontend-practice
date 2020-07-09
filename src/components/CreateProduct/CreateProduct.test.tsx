import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import CreateProduct from "./CreateProduct";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import {
  createProduct,
  createProductSuccess,
  createProductFail,
} from "../../reducers/products/actions";
import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
} from "../../reducers/products/types";

describe("actions Create Product", () => {
  it("should create an action post product", () => {
    const product = {
      name: "Product 1",
      price: 20,
      commission: 1,
      description: "Image Description",
      image: "http://image.er",
    };
    const expectedAction = {
      type: CREATE_PRODUCT,
      payload: product,
    };
    expect(createProduct(product)).toEqual(expectedAction);
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
      type: CREATE_PRODUCT_SUCCESS,
      payload: product,
    };
    expect(createProductSuccess(product)).toEqual(expectedAction);
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
      type: CREATE_PRODUCT_FAIL,
      payload: "error",
    };
    expect(createProductFail("error")).toEqual(expectedAction);
  });
});

describe("MyForm", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  let handleSubmit: () => void;
  const mockStore = configureStore();
  beforeEach(() => {
    handleSubmit = jest.fn();
    const store = mockStore({
      products: {},
      success: false,
      onSubmit: handleSubmit,
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/123/create-product"]}>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(CreateProduct);
  });
  it("should render component ", () => {
    expect(container.length).toBeTruthy();
  });
  it("what happens when the form is not submitted", async () => {
    const buttonSubmit = container.find('button[type="submit"]');
    expect(buttonSubmit.props().disabled).toBe(false);
  });
  it("should set success to true when submit", async () => {
    const buttonSubmit = container.find('button[type="submit"]');
    const nameField = container.find('input[name="name"]');
    const descriptionField = container.find('input[name="description"]');
    const priceField = container.find('input[name="price"]');
    const commissionField = container.find('input[name="commission"]');
    const imageField = container.find('input[type="file"]');
    nameField.simulate("change", { target: { name: "name", value: "estufa" } });
    descriptionField.simulate("change", {
      target: { name: "description", value: "mega potente super duper" },
    });
    priceField.simulate("change", { target: { name: "price", value: 40000 } });
    commissionField.simulate("change", {
      target: { name: "commission", value: 4000 },
    });
    imageField.simulate("change", {
      target: {
        files: [
          "https://pixabay.com/es/photos/ave-loro-animales-pluma-colorido-4887736/",
        ],
      },
    });
    expect(buttonSubmit.props().disabled).toBe(false);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    const formData = container.find("form");
    formData.simulate("submit");
    container.update();
    await (() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
