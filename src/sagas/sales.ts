import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import urlServer from "./index";
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
      const response = yield call(axios.post, `${urlServer}sales`, {
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

// Middleware getAllSales no está completo, debido a modificaciones pendientes en el back
function* getAllSales() {
  yield takeLatest(GET_SALES, function* (action: GetSalesAction) {
    try {
      //modificar ruta
      const response = yield call(axios.get, `${urlServer}sales`); 

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

// Middleware deleteSales no está completo, debido a modificaciones pendientes en el back
function* deleteSale() {
  yield takeLatest(DELETE_ONE_SALE, function* (action: DeleteOneSaleAction) {
    try {
      const response = yield call(axios.delete, `${urlServer}sales/:id`, {
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
}
