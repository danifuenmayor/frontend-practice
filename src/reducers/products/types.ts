// products payload
export interface PayloadProducts {
  error?: string;
  products: any[];
}
// Products state
export interface ProductState {
  error?: string;
  products: any[];
}

// Product action names
export const GET_PRODUCTS = "PRODUCTS/GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "PRODUCTS/GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "PRODUCTS/GET_PRODUCTS_FAIL";

export const CREATE_PRODUCT = "PRODUCTS/CREATE_PRODUCT";
export const CREATE_PRODUCT_SUCCESS = "PRODUCTS/CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAIL = "PRODUCTS/CREATE_PRODUCT_FAIL";

export const DELETE_PRODUCTS = "PRODUCTS/DELTE_PRODUCTS";
export const DELETE_PRODUCTS_SUCCESS = "PRODUCTS/DELETE_PRODUCTS_SUCCESS";
export const DELETE_PRODUCTS_FAIL = "PRODUCTS/DELETE_PRODUCTS_FAIL";

// GetProducts action types
export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  payload: PayloadProducts;
}
export interface GetProductsFailAction {
  type: typeof GET_PRODUCTS_FAIL;
  payload: string;
}
export interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: PayloadProducts;
}

// Create Products
export interface CreateProductAction {
  type: typeof CREATE_PRODUCT;
  payload: PayloadProducts;
}
export interface CreateProductFailAction {
  type: typeof CREATE_PRODUCT_FAIL;
  payload: string;
}
export interface CreateProductSuccessAction {
  type: typeof CREATE_PRODUCT_SUCCESS;
  payload: PayloadProducts;
}

export type ProductsActions =
  | GetProductsAction
  | GetProductsFailAction
  | GetProductsSuccessAction
  | CreateProductAction
  | CreateProductFailAction
  | CreateProductSuccessAction;
