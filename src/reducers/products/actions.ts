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
  EditProductAction,
  EDIT_PRODUCT,
  EditProductSuccessAction,
  EDIT_PRODUCT_SUCCESS,
  EditProductFailAction,
  EDIT_PRODUCT_FAIL,
  CREATE_PRODUCT,
  CreateProductAction,
  CreateProductSuccessAction,
  CREATE_PRODUCT_SUCCESS,
  CreateProductFailAction,
  CREATE_PRODUCT_FAIL,
  PayloadEditProduct,
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

// Edit Product Actions
export function editProduct(
  editedProduct: PayloadEditProduct
): EditProductAction {
  return {
    type: EDIT_PRODUCT,
    payload: editedProduct,
  };
}
export function editProductSuccess(
  editedProduct: PayloadEditProduct
): EditProductSuccessAction {
  return {
    type: EDIT_PRODUCT_SUCCESS,
    payload: editedProduct,
  };
}
export function editProductFail(error: string): EditProductFailAction {
  return {
    type: EDIT_PRODUCT_FAIL,
    payload: error,
  };
}

export function createProduct(newProduct: string): CreateProductAction {
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
