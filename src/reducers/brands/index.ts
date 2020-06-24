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
  EDIT_BRAND,
  EDIT_BRAND_SUCCESS,
  EDIT_BRAND_FAIL,
  GET_ONE_BRAND,
  GET_ONE_BRAND_SUCCESS,
  GET_ONE_BRAND_FAIL,
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
        editedBrand: {
          success: true,
        },
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
        deletedBrand: {
          success: true,
        },
      };
    case EDIT_BRAND:
      return {
        ...state,
        editedBrand: {
          loading: true,
        },
      };
    case EDIT_BRAND_SUCCESS:
      return {
        ...state,
        editedBrand: {
          name: action.payload.name,
          success: true,
        },
      };
    case EDIT_BRAND_FAIL:
      return {
        ...state,
        editedBrand: {
          success: false,
          error: action.payload,
        },
      };
    case GET_ONE_BRAND:
      return {
        ...state,
        selected: {
          loading: true,
        },
        deletedBrand: undefined,
      };
    case GET_ONE_BRAND_SUCCESS:
      return {
        ...state,
        selected: {
          item: action.payload,
        },
      };
    case GET_ONE_BRAND_FAIL:
      return {
        ...state,
        selected: {
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
