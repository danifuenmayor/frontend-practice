import {
  PayloadSales,
  SALE_PRODUCT,
  SaleProductAction,
  SALE_PRODUCT_SUCCESS,
  SaleProductSuccessAction,
  SALE_PRODUCT_FAIL,
  SaleProductFailAction,
  GET_SALES,
  GetSalesAction,
  GET_SALES_SUCCESS,
  GetSalesSuccessAction,
  GET_SALES_FAIL,
  GetSalesFailAction,
} from "./types";

// Sale Product Actions
export function setSale(newSale: PayloadSales): SaleProductAction {
  return {
    type: SALE_PRODUCT,
    payload: newSale,
  };
}
export function setSaleSuccess(
  newSale: PayloadSales
): SaleProductSuccessAction {
  return {
    type: SALE_PRODUCT_SUCCESS,
    payload: newSale,
  };
}
export function setSaleFail(error: string): SaleProductFailAction {
  return {
    type: SALE_PRODUCT_FAIL,
    payload: error,
  };
}

// Get Sales Actions
export function getSales(allSales: PayloadSales): GetSalesAction {
  return {
    type: GET_SALES,
    payload: allSales,
  };
}
export function getSalesSuccess(allSales: PayloadSales): GetSalesSuccessAction {
  return {
    type: GET_SALES_SUCCESS,
    payload: allSales,
  };
}
export function getSalesFail(error: string): GetSalesFailAction {
  return {
    type: GET_SALES_FAIL,
    payload: error,
  };
}


