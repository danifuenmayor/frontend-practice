import {
  PayloadBrands,
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAIL,
  GetAllBrandsAction,
  GetAllBrandsSuccessAction,
  GetAllBrandsFailAction,
  CREATE_ONE_BRAND,
  CREATE_ONE_BRAND_SUCCESS,
  CREATE_ONE_BRAND_FAIL,
  CreateOneBrandAction,
  CreateOneBrandFailAction,
  CreateOneBrandSuccessAction,
  DELETE_ONE_BRAND,
  DELETE_ONE_BRAND_FAIL,
  DELETE_ONE_BRAND_SUCCESS,
  DeleteOneBrandAction,
  DeleteOneBrandFailAction,
  DeleteOneBrandSuccessAction,
} from "./types";

// Get All Actions
export function getAllBrands(getBrands: PayloadBrands): GetAllBrandsAction {
  return {
    type: GET_ALL_BRANDS,
    payload: getBrands,
  };
}
export function getAllBrandsSuccess(
  getBrands: PayloadBrands
): GetAllBrandsSuccessAction {
  return {
    type: GET_ALL_BRANDS_SUCCESS,
    payload: getBrands,
  };
}
export function getAllBrandsFail(error: string): GetAllBrandsFailAction {
  return {
    type: GET_ALL_BRANDS_FAIL,
    payload: error,
  };
}

//Create One Brand Actions

export function createOneBrand(
  newBrand:PayloadBrands
): CreateOneBrandAction {
  return {
    type: CREATE_ONE_BRAND,
    payload: newBrand,
  };
}
export function createOneBrandSuccess(
  newBrand: PayloadBrands
): CreateOneBrandSuccessAction {
  return {
    type: CREATE_ONE_BRAND_SUCCESS,
    payload: newBrand,
  };
}
export function createOneBrandFail(error: string): CreateOneBrandFailAction {
  return {
    type: CREATE_ONE_BRAND_FAIL,
    payload: error,
  };
}

//Delete One Brand Action

export function deleteOneBrand(
  deletedBrand: PayloadBrands
): DeleteOneBrandAction {
  return {
    type: DELETE_ONE_BRAND,
    payload: deletedBrand,
  };
}
export function deleteOneBrandSuccess(
  deletedBrand: PayloadBrands
): DeleteOneBrandSuccessAction {
  return {
    type: DELETE_ONE_BRAND_SUCCESS,
    payload: deletedBrand,
  };
}
export function deleteOneBrandFail(error: string): DeleteOneBrandFailAction {
  return {
    type: DELETE_ONE_BRAND_FAIL,
    payload: error,
  };
}