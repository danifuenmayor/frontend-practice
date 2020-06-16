import {
  BrandState,
  BrandsActions,
  GET_All_BRANDS,
  GET_All_BRANDS_FAIL,
  GET_All_BRANDS_SUCCESS,
  CREATE_ONE_BRAND,
  CREATE_ONE_BRAND_SUCCESS,
  CREATE_ONE_BRAND_FAIL,
  DELETE_ONE_BRAND,
  DELETE_ONE_BRAND_FAIL,
  DELETE_ONE_BRAND_SUCCESS,
} from "./types";

const initialStateBrand: BrandState = {
  brands: [],
};

export const BrandsReducer = (
  state = initialStateBrand,
  action: BrandsActions
): BrandState => {
  switch (action.type) {
    case GET_All_BRANDS:
      return state;

    case GET_All_BRANDS_FAIL:
      return state;

    case GET_All_BRANDS_SUCCESS:
      return {
        brands: [...state.brands, action.payload],
      };

    case CREATE_ONE_BRAND:
      return state;

    case CREATE_ONE_BRAND_FAIL:
      return state;

    case CREATE_ONE_BRAND_SUCCESS:
      return {
        brands: [...state.brands, action.payload],
      };

    case DELETE_ONE_BRAND:
      return state;

    case DELETE_ONE_BRAND_FAIL:
      return state;

    case DELETE_ONE_BRAND_SUCCESS:
      return {
        brands: [...state.brands, action.payload],
      };
    default:
      return state;
  }
};
