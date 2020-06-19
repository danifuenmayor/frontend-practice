import {
  PayloadProducts,
  GetProductsAction,
  GET_PRODUCTS,
  GetProductsSuccessAction,
  GET_PRODUCTS_SUCCESS,
  GetProductsFailAction,
  GET_PRODUCTS_FAIL,
  DeleteProductAction,
  DeleteProductSuccessAction,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DeleteProductFailAction,
  DELETE_PRODUCT,
  ProductApi,
} from "./types";

// Get Products Actions
export function getProducts(newProduct: PayloadProducts): GetProductsAction {
  return {
    type: GET_PRODUCTS,
    payload: newProduct,
  };
}
export function getProductsSuccess(
  products: ProductApi[]
): GetProductsSuccessAction {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}
export function getProductsFail(error: string): GetProductsFailAction {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: error,
  };
}
// DeleteProduct Actions
export function deleteProduct(deletedProduct: string): DeleteProductAction {
  return {
    type: DELETE_PRODUCT,
    payload: deletedProduct,
  };
}
export function deleteProductSuccess(
  deletedProduct: PayloadProducts
): DeleteProductSuccessAction {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: deletedProduct,
  };
}
export function deleteProductFail(error: string): DeleteProductFailAction {
  return {
    type: DELETE_PRODUCT_FAIL,
    payload: error,
  };
}
