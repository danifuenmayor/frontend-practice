// Brand payload

export interface PayloadBrands {
  brands: object;
}

export interface BrandState {
  name: string;
  image: string;
  error?: string
  brands: object;
}

// Brands action names
export const GET_ALL_BRANDS = "USER/GET_ALL_BRANDS";
export const GET_ALL_BRANDS_SUCCESS = "USER/GET_ALL_BRANDS_SUCCESS";
export const GET_ALL_BRANDS_FAIL = "USER/GET_ALL_BRANDS_FAIL";

export const CREATE_ONE_BRAND = "ADMIN/CREATE_ONE_BRAND";
export const CREATE_ONE_BRAND_SUCCESS = "ADMIN/CREATE_ONE_BRAND_SUCCESS";
export const CREATE_ONE_BRAND_FAIL = "ADMIN/CREATE_ONE_BRAND_FAIL";

export const DELETE_ONE_BRAND = "ADMIN/DELETE_ONE_BRAND";
export const DELETE_ONE_BRAND_SUCCESS = "ADMIN/DELETE_ONE_BRAND_SUCCESS";
export const DELETE_ONE_BRAND_FAIL = "ADMIN/DELETE_ONE_BRAND_FAIL";

// Get All Brands action types
export interface GetAllBrandsAction {
  type: typeof GET_ALL_BRANDS;
  payload: PayloadBrands;
}
export interface GetAllBrandsFailAction {
  type: typeof GET_ALL_BRANDS_FAIL;
  payload: string;
}
export interface GetAllBrandsSuccessAction {
  type: typeof GET_ALL_BRANDS_SUCCESS;
  payload: PayloadBrands;
}

// Create One Brand action types
export interface CreateOneBrandAction {
  type: typeof CREATE_ONE_BRAND;
  payload: PayloadBrands;
}
export interface CreateOneBrandFailAction {
  type: typeof CREATE_ONE_BRAND_FAIL;
  payload: string;
}
export interface CreateOneBrandSuccessAction {
  type: typeof CREATE_ONE_BRAND_SUCCESS;
  payload: PayloadBrands;
}

//Delete One Brand action types

export interface DeleteOneBrandAction {
  type: typeof DELETE_ONE_BRAND;
  payload: PayloadBrands;
}
export interface DeleteOneBrandFailAction {
  type: typeof DELETE_ONE_BRAND_FAIL;
  payload: string;
}
export interface DeleteOneBrandSuccessAction {
  type: typeof DELETE_ONE_BRAND_SUCCESS;
  payload: PayloadBrands;
}

export type BrandsActions =
  | GetAllBrandsAction
  | GetAllBrandsFailAction
  | GetAllBrandsSuccessAction
  | CreateOneBrandAction
  | CreateOneBrandFailAction
  | CreateOneBrandSuccessAction
  | DeleteOneBrandAction
  | DeleteOneBrandFailAction
  | DeleteOneBrandSuccessAction;