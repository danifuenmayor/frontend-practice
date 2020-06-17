import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";

import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAIL,
  GetAllBrandsAction,
  GetAllBrandsSuccessAction,
  GetAllBrandsFailAction,
  //   CREATE_ONE_BRAND,
  //   CREATE_ONE_BRAND_SUCCESS,
  //   CREATE_ONE_BRAND_FAIL,
  //   CreateOneBrandAction,
  //   CreateOneBrandFailAction,
  //   CreateOneBrandSuccessAction,
  //   DELETE_ONE_BRAND,
  //   DELETE_ONE_BRAND_FAIL,
  //   DELETE_ONE_BRAND_SUCCESS,
  //   DeleteOneBrandAction,
  //   DeleteOneBrandFailAction,
  //   DeleteOneBrandSuccessAction,
} from "../reducers/brands/types";



function* getAllBrands() {
  yield takeLatest(GET_ALL_BRANDS, function* (action: GetAllBrandsAction) {
    try {
      const { payload } = action;
      console.log("payload", payload);

      const response = yield call(axios.get, "http://localhost:3000/brands");
      console.log("brands", response);

      yield put<GetAllBrandsSuccessAction>({
        type: GET_ALL_BRANDS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<GetAllBrandsFailAction>({
        type: GET_ALL_BRANDS_FAIL,
        payload: err.message,
      });
    }
  });
}

export default function* saga() {
  yield fork(getAllBrands);
}
