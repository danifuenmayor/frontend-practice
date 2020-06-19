// products payload
export interface PayloadProducts {
  error?: string;
  products: any[];
}
export interface ProductApi {
  name: string;
  price: string;
  commission: string;
  description: string;
}
// Products state
export interface ProductState {
  error?: string;
  products: ProductApi[];
  selected?: {
    item?: ProductApi;
    loading?: boolean;
    error?: string;
  };
  deletedProduct?: {
    loading?: boolean;
    error?: string;
    success?: boolean;
  };
}

// Product action names
export const GET_PRODUCTS = "PRODUCTS/GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "PRODUCTS/GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "PRODUCTS/GET_PRODUCTS_FAIL";

export const GET_PRODUCT = "PRODUCTS/GET_PRODUCT";
export const GET_PRODUCT_SUCCESS = "PRODUCTS/GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "PRODUCTS/GET_PRODUCT_FAIL";

export const CREATE_PRODUCT = "PRODUCTS/CREATE_PRODUCT";
export const CREATE_PRODUCT_SUCCESS = "PRODUCTS/CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAIL = "PRODUCTS/CREATE_PRODUCT_FAIL";

export const DELETE_PRODUCT = "PRODUCTS/DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "PRODUCTS/DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL = "PRODUCTS/DELETE_PRODUCT_FAIL";

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
  payload: ProductApi[];
}
// geT ONE
export interface GetProductAction {
  type: typeof GET_PRODUCT;
  payload: string;
}
export interface GetProductFailAction {
  type: typeof GET_PRODUCT_FAIL;
  payload: string;
}
export interface GetProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: ProductApi;
}

// Delete Products
export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  payload: string;
}
export interface DeleteProductFailAction {
  type: typeof DELETE_PRODUCT_FAIL;
  payload: string;
}
export interface DeleteProductSuccessAction {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: PayloadProducts;
}

export type ProductsActions =
  | GetProductsAction
  | GetProductsFailAction
  | GetProductsSuccessAction
  | DeleteProductAction
  | DeleteProductSuccessAction
  | DeleteProductFailAction
  | GetProductAction
  | GetProductFailAction
  | GetProductSuccessAction;
