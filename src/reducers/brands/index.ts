import {
  BrandState,
  BrandsActions,
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_FAIL,
  GET_ALL_BRANDS_SUCCESS,
  CREATE_ONE_BRAND,
  CREATE_ONE_BRAND_SUCCESS,
  CREATE_ONE_BRAND_FAIL,
  DELETE_ONE_BRAND,
  DELETE_ONE_BRAND_FAIL,
  DELETE_ONE_BRAND_SUCCESS,
} from "./types";

const initialStateBrand: BrandState = {
  name: "",
  image: "",
  brands: [],
};

export const brandsReducer = (
  state = initialStateBrand,
  action: BrandsActions
): BrandState => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return state;

    case GET_ALL_BRANDS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload,
      };

    case CREATE_ONE_BRAND:
      return state;

    case CREATE_ONE_BRAND_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case CREATE_ONE_BRAND_SUCCESS:
      return {
        ...state,
        brands: action.payload,
      };

    case DELETE_ONE_BRAND:
      return state;

    case DELETE_ONE_BRAND_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_ONE_BRAND_SUCCESS:
      return {
        ...state,
        brands: action.payload,
      };
    default:
      return state;
  }
};
