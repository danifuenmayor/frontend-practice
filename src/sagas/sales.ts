import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
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
} from "../reducers/sales/types";
import { findSpanishError } from "../helpers";
const urlServer = "http://localhost:3000/";
function* saleProduct() {
  yield takeLatest(SALE_PRODUCT, function* (action: SaleProductAction) {
    try {
      const { payload } = action;
      const response = yield call(
        axios.post,
        `${urlServer}sales`,
        {
          name: payload.name,
          lastName: payload.lastName,
          rut: payload.rut,
          phone: payload.phone,
          address: payload.address,
          productId: payload.productId,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.accessToken}`,
          },
        }
      );
      yield put<SaleProductSuccessAction>({
        type: SALE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<SaleProductFailAction>({
        type: SALE_PRODUCT_FAIL,
        payload: findSpanishError(err),
      });
    }
  });
}
function* getAllSales() {
  yield takeLatest(GET_SALES, function* (action: GetSalesAction) {
    try {
      const response = yield call(axios.get, `${urlServer}sales`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      yield put<GetSalesSuccessAction>({
        type: GET_SALES_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<GetSalesFailAction>({
        type: GET_SALES_FAIL,
        payload: findSpanishError(err),
      });
    }
  });
}
export default function* saga() {
  yield fork(saleProduct);
  yield fork(getAllSales);
}
