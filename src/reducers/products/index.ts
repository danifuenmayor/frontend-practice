import {
  ProductState,
  ProductsActions,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from "./types";

const initialStateProducts: ProductState = {
  error: undefined,
  products: [],
};

export const ProductReducer = (
  state = initialStateProducts,
  action: ProductsActions
): ProductState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        selected: {
          loading: true,
        },
        deletedProduct: undefined,
      };

    case GET_PRODUCT_FAIL:
      return {
        ...state,
        selected: {
          error: action.payload,
        },
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        selected: {
          item: action.payload,
        },
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        deletedProduct: {
          loading: true,
        },
      };

    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        deletedProduct: {
          error: action.payload,
        },
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deletedProduct: {
          success: true,
        },
      };

    default:
      return state;
  }
};
