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
  EDIT_PRODUCT,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  CREATE_PRODUCT,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_CLEAR,
  EDIT_PRODUCT_CLEAR,
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
    case EDIT_PRODUCT:
      return {
        ...state,
        editedProduct: {
          loading: true,
        },
      };
    case EDIT_PRODUCT_FAIL:
      return {
        ...state,
        editedProduct: {
          error: action.payload,
        },
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editedProduct: {
          success: true,
          name: action.payload.name,
          price: action.payload.price,
          description: action.payload.description,
          commission: action.payload.commission,
          image: action.payload.image,
        },
      };
    case EDIT_PRODUCT_CLEAR:
      return {
        ...state,
        editedProduct: {
          success: undefined,
          loading: undefined,
        },
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        newProduct: {
          loading: true,
        },
      };
    case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        newProduct: {
          error: action.payload,
        },
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        newProduct: {
          success: true,
          name: action.payload.name,
          price: action.payload.price,
          description: action.payload.description,
          commission: action.payload.commission,
          image: action.payload.image,
        },
      };
    case CREATE_PRODUCT_CLEAR:
      return {
        ...state,
        newProduct: {
          loading: undefined,
          success: undefined,
        },
      };
    default:
      return state;
  }
};
