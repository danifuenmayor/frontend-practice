import {
  getProducts,
  getProductsSuccess,
} from "../../../reducers/products/actions";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
} from "../../../reducers/products/types";

describe("actions Create Product", () => {
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
});
