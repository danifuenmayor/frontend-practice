import {
  SaleProductState,
  SalesActions,
  SALE_PRODUCT,
  SALE_PRODUCT_SUCCESS,
  SALE_PRODUCT_FAIL,
  GET_SALES,
  GET_SALES_FAIL,
  GET_SALES_SUCCESS,
} from "./types";

const initialStateSales: SaleProductState = {
  name: "",
  lastName: "",
  rut: "",
  phone: "",
  address: "",
  accessToken: "",
  productId: "",
  sales: [],
};

export const SaleReducer = (
  state = initialStateSales,
  action: SalesActions
): SaleProductState => {
  switch (action.type) {
    case SALE_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case SALE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case SALE_PRODUCT_SUCCESS:
      return {
        ...state,
        sales: [action.payload],
        loading: true,
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

    default:
      return state;
  }
};
