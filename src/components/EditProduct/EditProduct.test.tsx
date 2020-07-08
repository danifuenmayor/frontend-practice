import "../../setupTests";
import React from "react";
import { ReactWrapper, mount } from "enzyme";
import EditProduct from "./EditProduct";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import {
  getProduct,
  getProductSuccess,
  getProductFail,
  getProducts,
  getProductsSuccess,
  getProductsFail,
  editProductSuccess,
  editProduct,
  deleteProductSuccess,
  deleteProduct,
  deleteProductFail,
  editProductFail,
} from "../../reducers/products/actions";
import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  EDIT_PRODUCT_FAIL,
} from "../../reducers/products/types";

describe("actions get product", () => {
  it("should create an action post product", () => {
    const expectedAction = {
      type: GET_PRODUCT,
    };
    expect(getProduct()).toEqual(expectedAction);
  });
  it("should return an action post get product success", () => {
    const product = {
      name: "Product 1",
      price: 20,
      commission: 1,
      description: "Image Description",
      image: "http://image.er",
    };
    const expectedAction = {
      type: GET_PRODUCT_SUCCESS,
      payload: product,
    };
    expect(getProductSuccess(product)).toEqual(expectedAction);
  });
  it("should return an action after product fails", () => {
    const expectedAction = {
      type: GET_PRODUCT_FAIL,
      payload: "someError",
    };
    expect(getProductFail("someError")).toEqual(expectedAction);
  });
});

describe("actions for getting products", () => {
  it("getting products action", () => {
    const expectedAction = {
      type: GET_PRODUCTS,
    };
    expect(getProducts()).toEqual(expectedAction);
  });
  it("getting products succesfully action", () => {
    const product = {
      name: "fakeProduct",
      price: 10,
      commission: 1,
      description: "some fake product",
      image: "hereIsTheImg",
    };

    const expectedAction = {
      type: GET_PRODUCTS_SUCCESS,
      payload: [product],
    };
    expect(getProductsSuccess([product])).toEqual(expectedAction);
  });
  it("getting products actions failed", () => {
    const expectedAction = {
      type: GET_PRODUCTS_FAIL,
      payload: "someError",
    };
    expect(getProductsFail("someError")).toEqual(expectedAction);
  });
});

describe("actions edit Product", () => {
  it("should return an action post edit product", () => {
    const product = {
      name: "Product 1",
      price: 20,
      commission: 1,
      description: "Image Description",
      image: "http://image.er",
    };
    const expectedAction = {
      type: EDIT_PRODUCT,
      payload: product,
    };
    expect(editProduct(product)).toEqual(expectedAction);
  });
  it("should return an action after edit product success", () => {
    const product = {
      name: "Product",
      price: 20,
      commission: 1,
      description: "Image Description",
      image: "http://image.er",
    };
    const expectedAction = {
      type: EDIT_PRODUCT_SUCCESS,
      payload: product,
    };
    expect(editProductSuccess(product)).toEqual(expectedAction);
  });
  it("should return an action after edit product fails", () => {
    const expectedAction = {
      type: EDIT_PRODUCT_FAIL,
      payload: "someError",
    };
    expect(editProductFail("someError")).toEqual(expectedAction);
  });
});

describe("actions delete Product", () => {
  const productId = "someId01";
  it("should return an action post delete product", () => {
    const expectedAction = {
      type: DELETE_PRODUCT,
      payload: productId,
    };
    expect(deleteProduct(productId)).toEqual(expectedAction);
  });
  it("should return an action after edit product success", () => {
    const expectedAction = {
      type: DELETE_PRODUCT_SUCCESS,
    };
    expect(deleteProductSuccess()).toEqual(expectedAction);
  });
  it("should return an action after edit product fail", () => {
    const product = {
      name: "Product 1",
      price: 20,
      commission: 1,
      description: "Image Description",
      image: "http://image.er",
    };
    const expectedAction = {
      type: DELETE_PRODUCT_FAIL,
      payload: [product],
    };
    expect(deleteProductFail([product])).toEqual(expectedAction);
  });
});

describe("EditForm", () => {
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
          <EditProduct />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(EditProduct);
  });
  it("should render component ", () => {
    expect(container.length).toBeTruthy();
  });
});

describe("testing edit product form", () => {
  let wrapper: ReactWrapper;
  let container: ReactWrapper;
  let handleClick: () => void;
  let handleSubmit: () => void;
  const mockStore = configureStore();

  beforeEach(() => {
    handleClick = jest.fn();
    handleSubmit = jest.fn();
    const store = mockStore({
      products: {
        selected: {
          item: {
            name: "notEditedName",
            price: 10,
            commission: 1,
            description: "someDescription",
            image: "notEditedImage",
          },
        },
        editedProduct: {
          loading: false,
          success: null,
          error: null,
          name: "",
          price: null,
          description: "",
          commission: null,
          image: "",
        },
      },
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/edit-product"]}>
          <EditProduct />
        </MemoryRouter>
      </Provider>
    );
    container = wrapper.find(EditProduct);
  });
  test("component renders correctly", () => {
    expect(container.length).toBeTruthy();
  });
  test("what happens when the form is not submitted", async () => {
    const buttonEdit = container.find('button[type="button"]').last();
    expect(buttonEdit.props().disabled).toBe(false);
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
  test("should submit data when submit button clicked", async () => {
    const buttonEdit = container.find('button[type="button"]').last();
    buttonEdit.simulate("click");
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    const buttonSubmit = container.find('button[type="submit"]');
    container.update();
    await (() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(buttonSubmit.props().disabled).toBe(false);
      const file = new Blob(["fileContents"], { type: "text/plain" });
      const inputName = container.find('input[name="name"]');
      const inputImage = container.find('input[name="image"]');
      const inputDescription = container.find('input[name="description"]');
      const inputPrice = container.find('input[name="price"]');
      const inputCommission = container.find('input[name="commission"]');
      inputName.simulate("change", {
        target: { name: "name", value: "editedProduct" },
      });
      inputImage.simulate("change", { target: { files: [file] } });

      inputDescription.simulate("change", {
        target: { name: "name", value: "editedProductDescription" },
      });
      inputPrice.simulate("change", {
        target: { name: "name", value: 100 },
      });
      inputCommission.simulate("change", {
        target: { name: "name", value: 10 },
      });
    });
    await (() => {
      const formData = container.find("form");
      formData.simulate("submit");
      container.update();
    });
    await (() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
  test("form should not submit if not all inputs are fullfilled", async () => {
    const buttonEdit = container.find('button[type="button"]').last();
    buttonEdit.simulate("click");
    container.update();
    await (() => {
      const formData = container.find("form");
      formData.simulate("submit");
      container.update();
    });
    await (() => {
      expect(handleSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
