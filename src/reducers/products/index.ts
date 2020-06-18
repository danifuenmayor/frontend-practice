import {
  ProductState,
  ProductsActions,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
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
        products: [action.payload],
      };
    case CREATE_PRODUCT:
      return state;

    case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
      };

    default:
      return state;
  }
};
