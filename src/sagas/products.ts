import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  GetProductsAction,
  GET_PRODUCTS,
  GetProductsSuccessAction,
  GetProductsFailAction,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT,
  CreateProductAction,
  CreateProductSuccessAction,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  CreateProductFailAction,
} from "../reducers/products/types";

function* getProducts() {
  yield takeLatest(GET_PRODUCTS, function* (action: GetProductsAction) {
    try {
      const response = yield call(axios.get, "http://localhost:8080/products");

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
function* createProduct() {
  yield takeLatest(CREATE_PRODUCT, function* (action: CreateProductAction) {
    try {
      const response = yield call(axios.get, "http://localhost:3000/products");

      yield put<CreateProductSuccessAction>({
        type: CREATE_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<CreateProductFailAction>({
        type: CREATE_PRODUCT_FAIL,
        payload: err.message,
      });
    }
  });
}

export default function* saga() {
  yield fork(getProducts);
  yield fork(createProduct);
}
