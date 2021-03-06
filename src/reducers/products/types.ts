// products payload
export interface PayloadProducts {
  error?: string;
  products: any[];
}
export interface PayloadEditProduct {
  name: string;
  description: string;
  price: number;
  commission: number;
  image: any;
  id?: string;
  brandId?: string;
  isActive?: undefined,
}
export interface ProductApi {
  name: string;
  price: number;
  commission: number;
  description: string;
  image: any;
  isActive?: undefined,
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
  editedProduct?: {
    name?: string;
    price?: number;
    description?: string;
    commission?: number;
    loading?: boolean;
    error?: string;
    success?: boolean;
    image?: any;
  };
  newProduct?: {
    name?: string;
    price?: number;
    description?: string;
    commission?: number;
    loading?: boolean;
    error?: string;
    success?: boolean;
    image?: any;
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
export const CREATE_PRODUCT_CLEAR = "PRODUCTS/CREATE_PRODUCT_CLEAR";

export const DELETE_PRODUCT = "PRODUCTS/DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "PRODUCTS/DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL = "PRODUCTS/DELETE_PRODUCT_FAIL";
export const EDIT_PRODUCT = "PRODUCTS/EDIT_PRODUCT";
export const EDIT_PRODUCT_SUCCESS = "PRODUCTS/EDIT_PRODUCT_SUCCESS";
export const EDIT_PRODUCT_FAIL = "PRODUCTS/EDIT_PRODUCT_FAIL";
export const EDIT_PRODUCT_CLEAR = "PRODUCT/EDIT_PRODUCT_CLEAR";

// GetProducts action types
export interface GetProductsAction {
  type: typeof GET_PRODUCTS;
  payload: ProductApi[];
}
export interface GetProductsFailAction {
  type: typeof GET_PRODUCTS_FAIL;
  payload: string;
}
export interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: ProductApi[];
}
// Get one product
export interface GetProductAction {
  type: typeof GET_PRODUCT;
  payload: ProductApi;
}
export interface GetProductFailAction {
  type: typeof GET_PRODUCT_FAIL;
  payload: string;
}
export interface GetProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: ProductApi;
}
// Delete one product
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
// Edit one product
export interface EditProductAction {
  type: typeof EDIT_PRODUCT;
  payload: PayloadEditProduct;
}
export interface EditProductSuccessAction {
  type: typeof EDIT_PRODUCT_SUCCESS;
  payload: PayloadEditProduct;
}
export interface EditProductFailAction {
  type: typeof EDIT_PRODUCT_FAIL;
  payload: string;
}
export interface EditProductClearAction {
  type: typeof EDIT_PRODUCT_CLEAR;
  payload: PayloadEditProduct;
}

//Create one product
export interface CreateProductAction {
  type: typeof CREATE_PRODUCT;
  payload: PayloadEditProduct;
}
export interface CreateProductSuccessAction {
  type: typeof CREATE_PRODUCT_SUCCESS;
  payload: PayloadEditProduct;
}
export interface CreateProductFailAction {
  type: typeof CREATE_PRODUCT_FAIL;
  payload: string;
}
export interface CreateProductClearAction {
  type: typeof CREATE_PRODUCT_CLEAR;
  payload: PayloadEditProduct;
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
  | GetProductSuccessAction
  | EditProductAction
  | EditProductFailAction
  | EditProductSuccessAction
  | EditProductClearAction
  | CreateProductAction
  | CreateProductFailAction
  | CreateProductSuccessAction
  | CreateProductClearAction;
