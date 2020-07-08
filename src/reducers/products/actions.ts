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
  GetProductAction,
  GET_PRODUCT_SUCCESS,
  GetProductSuccessAction,
  GetProductFailAction,
  GET_PRODUCT_FAIL,
  GET_PRODUCT,
  CreateProductClearAction,
  CREATE_PRODUCT_CLEAR,
  EditProductClearAction,
  EDIT_PRODUCT_CLEAR,
} from "./types";
// Get Products Actions
export function getProducts(newProduct: ProductApi[]): GetProductsAction {
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
// Get Product Actions
export function getProduct(newProduct: ProductApi): GetProductAction {
  return {
    type: GET_PRODUCT,
    payload: newProduct,
  };
}
export function getProductSuccess(
  product: ProductApi
): GetProductSuccessAction {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: product,
  };
}
export function getProductFail(error: string): GetProductFailAction {
  return {
    type: GET_PRODUCT_FAIL,
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
export function editProductClear(
  editedProduct: PayloadEditProduct
): EditProductClearAction {
  return {
    type: EDIT_PRODUCT_CLEAR,
    payload: editedProduct,
  };
}

export function createProduct(
  newProduct: PayloadEditProduct
): CreateProductAction {
  return {
    type: CREATE_PRODUCT,
    payload: newProduct,
  };
}
export function createProductSuccess(
  newProduct: PayloadEditProduct
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
export function createProductClear(
  newProduct: PayloadEditProduct
): CreateProductClearAction {
  return {
    type: CREATE_PRODUCT_CLEAR,
    payload: newProduct,
  };
}
