import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  GetProductsAction,
  GET_PRODUCTS,
  GetProductsSuccessAction,
  GetProductsFailAction,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  DeleteProductAction,
  DELETE_PRODUCT_SUCCESS,
  DeleteProductSuccessAction,
  DeleteProductFailAction,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GetProductAction,
  GetProductSuccessAction,
  GET_PRODUCT_SUCCESS,
  GetProductFailAction,
  GET_PRODUCT_FAIL,
} from "../reducers/products/types";
import { useParams } from "react-router-dom";
import { RootState } from "../reducers";
import { useSelector } from "react-redux";
const urlServer = "http://localhost:3000/";

const urlServer = "http://localhost:3000/";

function* getProducts() {
  yield takeLatest(GET_PRODUCTS, function* (action: GetProductsAction) {
    try {
      const response = yield call(axios.get, `${urlServer}products`);

      yield put<GetProductsSuccessAction>({
        type: GET_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<GetProductsFailAction>({
        type: GET_PRODUCTS_FAIL,
        payload: err.message,
      });
    }
  });
}

function* getProduct() {
  yield takeLatest(GET_PRODUCT, function* (action: GetProductAction) {
    try {
      const { payload } = action;
      const response = yield call(axios.get, `${urlServer}products/${payload}`);

      yield put<GetProductSuccessAction>({
        type: GET_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<GetProductFailAction>({
        type: GET_PRODUCT_FAIL,
        payload: err.message,
      });
    }
  });
}

function* deleteProduct() {
  yield takeLatest(DELETE_PRODUCT, function* (action: DeleteProductAction) {
    try {
      const { payload } = action;
      const response = yield call(
        axios.delete,
        `${urlServer}products/${payload}`
      );

      yield put<DeleteProductSuccessAction>({
        type: DELETE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<DeleteProductFailAction>({
        type: DELETE_PRODUCT_FAIL,
        payload: err.message,
      });
    }
  });
}

export default function* saga() {
  yield fork(getProducts);
  yield fork(getProduct);
  yield fork(deleteProduct);
}
