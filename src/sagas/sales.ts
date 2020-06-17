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
  DELETE_ONE_SALE,
  DeleteOneSaleAction,
  DELETE_ONE_SALE_SUCCESS,
  DeleteOneSaleSuccessAction,
  DELETE_ONE_SALE_FAIL,
  DeleteOneSaleFailAction,
} from "../reducers/sales/types";

function* saleProduct() {
  yield takeLatest(SALE_PRODUCT, function* (action: SaleProductAction) {
    try {
      const { payload } = action;
      const response = yield call(axios.post, "http://localhost:3000/sales", {
        name: payload.name,
        lastName: payload.lastName,
        rut: payload.rut,
        phone: payload.phone,
        address: payload.address,
        userId: payload.userId
      });

      yield put<SaleProductSuccessAction>({
        type: SALE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<SaleProductFailAction>({
        type: SALE_PRODUCT_FAIL,
        payload: err.message,
      });
    }
  });
}

function* getAllSales() {
  yield takeLatest(GET_SALES, function* (action: GetSalesAction) {
    try {
      const response = yield call(axios.get, "http://localhost:3000/sales"); //modificar ruta

      yield put<GetSalesSuccessAction>({
        type: GET_SALES_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<GetSalesFailAction>({
        type: GET_SALES_FAIL,
        payload: err.message,
      });
    }
  });
}

function* deleteSale() {
  yield takeLatest(DELETE_ONE_SALE, function* (action: DeleteOneSaleAction) {
    try {
      const response = yield call(axios.delete, "http://localhost:3000/sales/:id", {
            //enviar id de la venta para eliminarla
      }); //modificar ruta

      yield put<DeleteOneSaleSuccessAction>({
        type: DELETE_ONE_SALE_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<DeleteOneSaleFailAction>({
        type: DELETE_ONE_SALE_FAIL,
        payload: err.message,
      });
    }
  });
}

export default function* saga() {
  yield fork(saleProduct);
  yield fork(getAllSales);
  yield fork(deleteSale);
}
