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
  EDIT_PRODUCT,
  EditProductAction,
  EditProductSuccessAction,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EditProductFailAction,
} from "../reducers/products/types";

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

function* editProduct() {
  yield takeLatest(EDIT_PRODUCT, function* (action: EditProductAction) {
    try {
      const { payload } = action;

      console.log(payload);

      const response = yield call(
        axios.put,
        `${urlServer}products/${payload.id}`,
        {
          name: payload.name,
          description: payload.description,
          price: payload.price,
          commission: payload.commission,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      yield put<EditProductSuccessAction>({
        type: EDIT_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<EditProductFailAction>({
        type: EDIT_PRODUCT_FAIL,
        payload: err.message,
      });
    }
  });
}
export default function* saga() {
  yield fork(getProducts);
  yield fork(getProduct);
  yield fork(deleteProduct);
  yield fork(editProduct);
}
