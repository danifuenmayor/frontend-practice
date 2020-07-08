// Brand payload
export interface PayloadBrands {
  name: string;
  image: any;
  error?: string;
  brands: any[];
}
export interface PayLoadEditBrand {
  name: string;
  id?: string;
  image?: any;
}
export interface BrandApi {
  name: string;
  image: any;
}
export interface BrandState {
  name: string;
  image: any;
  error?: string;
  brands: BrandApi[];
  selected?: {
    item?: BrandApi;
    loading?: boolean;
    error?: string;
  };
  editedBrand?: {
    name?: string;
    image?: any;
    loading?: boolean;
    success?: boolean;
    error?: string;
  };
  deletedBrand?: {
    loading?: boolean;
    error?: string;
    success?: boolean;
  };
  newBrand?: {
    name?: string;
    image?: any;
    loading?: boolean;
    error?: string;
    success?: boolean;
  };
}
// Brands action names
export const GET_ONE_BRAND = "ADMIN/GET_ONE_BRAND";
export const GET_ONE_BRAND_SUCCESS = "ADMIN/GET_ONE_BRAND_SUCCESS";
export const GET_ONE_BRAND_FAIL = "ADMIN/GET_ONE_BRAND_FAIL";

export const GET_ALL_BRANDS = "USER/GET_ALL_BRANDS";
export const GET_ALL_BRANDS_SUCCESS = "USER/GET_ALL_BRANDS_SUCCESS";
export const GET_ALL_BRANDS_FAIL = "USER/GET_ALL_BRANDS_FAIL";

export const CREATE_ONE_BRAND = "ADMIN/CREATE_ONE_BRAND";
export const CREATE_ONE_BRAND_SUCCESS = "ADMIN/CREATE_ONE_BRAND_SUCCESS";
export const CREATE_ONE_BRAND_FAIL = "ADMIN/CREATE_ONE_BRAND_FAIL";

export const DELETE_ONE_BRAND = "ADMIN/DELETE_ONE_BRAND";
export const DELETE_ONE_BRAND_SUCCESS = "ADMIN/DELETE_ONE_BRAND_SUCCESS";
export const DELETE_ONE_BRAND_FAIL = "ADMIN/DELETE_ONE_BRAND_FAIL";

export const EDIT_BRAND = "ADMIN/EDIT_ONE_BRAND";
export const EDIT_BRAND_SUCCESS = "ADMIN/EDIT_ONE BRAND_SUCCESS";
export const EDIT_BRAND_FAIL = "ADMIN/EDIT_ONE_BRAND_FAIL";

export const EDIT_BRAND_CLEAR = "ADMIN/EDIT_BRAND_CLEAR";
export const CREATE_ONE_BRAND_CLEAR = "ADMIN/CREATE_ONE_BRAND_CLEAR";

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
  payload: BrandApi[];
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
  payload: string;
}
export interface DeleteOneBrandFailAction {
  type: typeof DELETE_ONE_BRAND_FAIL;
  payload: string;
}
export interface DeleteOneBrandSuccessAction {
  type: typeof DELETE_ONE_BRAND_SUCCESS;
  payload: PayloadBrands;
}
// Edit Brand action Types
export interface EditBrandAction {
  type: typeof EDIT_BRAND;
  payload: PayLoadEditBrand;
}
export interface EditBrandSuccessAction {
  type: typeof EDIT_BRAND_SUCCESS;
  payload: PayLoadEditBrand;
}
export interface EditBrandFailAction {
  type: typeof EDIT_BRAND_FAIL;
  payload: string;
}

// Get one brand
export interface GetBrandAction {
  type: typeof GET_ONE_BRAND;
  payload: string;
}
export interface GetBrandFailAction {
  type: typeof GET_ONE_BRAND_FAIL;
  payload: string;
}
export interface GetBrandSuccessAction {
  type: typeof GET_ONE_BRAND_SUCCESS;
  payload: BrandApi;
}

// Edit Brand Clear action Types
export interface EditBrandClearAction {
  type: typeof EDIT_BRAND_CLEAR;
  payload: PayLoadEditBrand;
}

export interface CreateBrandClearAction {
  type: typeof CREATE_ONE_BRAND_CLEAR;
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
  | DeleteOneBrandSuccessAction
  | EditBrandAction
  | EditBrandSuccessAction
  | EditBrandFailAction
  | GetBrandAction
  | GetBrandFailAction
  | GetBrandSuccessAction
  | EditBrandClearAction
  | CreateBrandClearAction;
