// Sale payload
export interface PayloadSales {
  name: string;
  lastName: string;
  rut: string;
  phone: string;
  address: string;
  accessToken: string;
  productId: string;
  sales: any;
}
// Sale state
export interface SaleProductState {
  name: string;
  lastName: string;
  rut: string;
  phone: string;
  address: string;
  accessToken: string;
  productId: string;
  loading?: boolean;
  error?: string;
  sales: any;
}
// Sales action names
export const SALE_PRODUCT = "SALES/SALE_PRODUCT";
export const SALE_PRODUCT_SUCCESS = "SALES/SALE_PRODUCT_SUCCESS";
export const SALE_PRODUCT_FAIL = "SALES/SALE_PRODUCT_FAIL";

export const GET_SALES = "SALES/GET_SALES";
export const GET_SALES_SUCCESS = "SALES/GET_SALES_SUCCESS";
export const GET_SALES_FAIL = "SALES/GET_SALES_FAIL";

export const DELETE_ONE_SALE = "PRODUCTS/DELETE_ONE_SALE";
export const DELETE_ONE_SALE_SUCCESS = "PRODUCTS/DELETE_ONE_SALE";
export const DELETE_ONE_SALE_FAIL = "PRODUCTS/DELETE_ONE_SALE";
// Sale product action types
export interface SaleProductAction {
  type: typeof SALE_PRODUCT;
  payload: PayloadSales;
}
export interface SaleProductFailAction {
  type: typeof SALE_PRODUCT_FAIL;
  payload: string;
}
export interface SaleProductSuccessAction {
  type: typeof SALE_PRODUCT_SUCCESS;
  payload: PayloadSales;
}
// Get Sales
export interface GetSalesAction {
  type: typeof GET_SALES;
  payload: PayloadSales;
}
export interface GetSalesFailAction {
  type: typeof GET_SALES_FAIL;
  payload: string;
}
export interface GetSalesSuccessAction {
  type: typeof GET_SALES_SUCCESS;
  payload: PayloadSales;
}
// Delete one sale
export interface DeleteOneSaleAction {
  type: typeof DELETE_ONE_SALE;
  payload: PayloadSales;
}
export interface DeleteOneSaleFailAction {
  type: typeof DELETE_ONE_SALE_FAIL;
  payload: string;
}
export interface DeleteOneSaleSuccessAction {
  type: typeof DELETE_ONE_SALE_SUCCESS;
  payload: PayloadSales;
}
export type SalesActions =
  | SaleProductAction
  | SaleProductFailAction
  | SaleProductSuccessAction
  | GetSalesAction
  | GetSalesFailAction
  | GetSalesSuccessAction
  | DeleteOneSaleAction
  | DeleteOneSaleFailAction
  | DeleteOneSaleSuccessAction;
