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
  EDIT_BRAND,
  EDIT_BRAND_SUCCESS,
  EDIT_BRAND_FAIL,
  EditBrandAction,
  EditBrandSuccessAction,
  EditBrandFailAction,
  PayLoadEditBrand,
  BrandApi,
} from "./types";
// Get All Actions
export function getAllBrands(newBrands: PayloadBrands): GetAllBrandsAction {
  return {
    type: GET_ALL_BRANDS,
    payload: newBrands,
  };
}
export function getAllBrandsSuccess(
  brands: BrandApi[]
): GetAllBrandsSuccessAction {
  return {
    type: GET_ALL_BRANDS_SUCCESS,
    payload: brands,
  };
}
export function getAllBrandsFail(error: string): GetAllBrandsFailAction {
  return {
    type: GET_ALL_BRANDS_FAIL,
    payload: error,
  };
}
//Create One Brand Actions
export function createOneBrand(newBrand: PayloadBrands): CreateOneBrandAction {
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
export function deleteOneBrand(deletedBrand: string): DeleteOneBrandAction {
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
// Edit one brand Action
export function editBrand(editedBrand: PayLoadEditBrand): EditBrandAction {
  return {
    type: EDIT_BRAND,
    payload: editedBrand,
  };
}
export function editBrandSuccess(
  editedBrand: PayLoadEditBrand
): EditBrandSuccessAction {
  return {
    type: EDIT_BRAND_SUCCESS,
    payload: editedBrand,
  };
}
export function editBrandFail(error: string): EditBrandFailAction {
  return {
    type: EDIT_BRAND_FAIL,
    payload: error,
  };
}
