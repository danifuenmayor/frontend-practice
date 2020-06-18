import {
  SaleProductState,
  SalesActions,
  SALE_PRODUCT,
  SALE_PRODUCT_SUCCESS,
  SALE_PRODUCT_FAIL,
  GET_SALES,
  GET_SALES_FAIL,
  GET_SALES_SUCCESS,
  DELETE_ONE_SALE,
  DELETE_ONE_SALE_SUCCESS,
  DELETE_ONE_SALE_FAIL,
} from "./types";

const initialStateSales: SaleProductState = {
  name: "",
  lastName: "",
  rut: "",
  phone: "",
  address: "",
  sold: false,
  userId: "",
  sales: [],
};

export const SaleReducer = (
  state = initialStateSales,
  action: SalesActions
): SaleProductState => {
  switch (action.type) {
    case SALE_PRODUCT:
      return state;

    case SALE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case SALE_PRODUCT_SUCCESS:
      return {
        ...state,
        sales: [action.payload],
      };
    case GET_SALES:
      return state;

    case GET_SALES_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case GET_SALES_SUCCESS:
      return {
        ...state,
        sales: [action.payload],
      };

    case DELETE_ONE_SALE:
      return state;

    case DELETE_ONE_SALE_FAIL:
      return {
        ...state,
        // error: action.payload,
      };

    case DELETE_ONE_SALE_SUCCESS:
      return {
        ...state,
        // sales: action.payload.sales,
      };

    default:
      return state;
  }
};
