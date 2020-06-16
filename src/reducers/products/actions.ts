import {
  PayloadProducts,
  GetProductsAction,
  GET_PRODUCTS,
  GetProductsSuccessAction,
  GET_PRODUCTS_SUCCESS,
  GetProductsFailAction,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT,
  CreateProductSuccessAction,
  CreateProductAction,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  CreateProductFailAction,
} from "./types";

// Get Products Actions
export function getProducts(newProduct: PayloadProducts): GetProductsAction {
  return {
    type: GET_PRODUCTS,
    payload: newProduct,
  };
}
export function getProductsSuccess(
  newProduct: PayloadProducts
): GetProductsSuccessAction {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: newProduct,
  };
}
export function getProductsFail(error: string): GetProductsFailAction {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: error,
  };
}
// CreateProduct Actions
export function createProduct(
  newProduct: PayloadProducts
): CreateProductAction {
  return {
    type: CREATE_PRODUCT,
    payload: newProduct,
  };
}
export function createProductSuccess(
  newProduct: PayloadProducts
): CreateProductSuccessAction {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: newProduct,
  };
}
export function createProductFail(error: string): CreateProductFailAction {
  return {
    type: CREATE_PRODUCT_FAIL,
    payload: error,
  };
}
