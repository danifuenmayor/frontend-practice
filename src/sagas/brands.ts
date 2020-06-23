import { put, takeLatest, fork, call } from "redux-saga/effects";
import axios from "axios";
import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAIL,
  GetAllBrandsAction,
  GetAllBrandsSuccessAction,
  GetAllBrandsFailAction,
  EDIT_BRAND,
  EDIT_BRAND_SUCCESS,
  EDIT_BRAND_FAIL,
  EditBrandAction,
  EditBrandSuccessAction,
  EditBrandFailAction,
} from "../reducers/brands/types";
const urlServer = "http://localhost:3000/";
function* getAllBrands() {
  yield takeLatest(GET_ALL_BRANDS, function* (action: GetAllBrandsAction) {
    try {
      const response = yield call(axios.get, `${urlServer}brands`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
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
function* editBrand() {
  yield takeLatest(EDIT_BRAND, function* (action: EditBrandAction) {
    try {
      const { payload } = action;
      console.log(payload);
      const response = yield call(
        axios.put,
        `${urlServer}brands/${payload.id}`,
        {
          name: payload.name,
          image: payload.image,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      yield put<EditBrandSuccessAction>({
        type: EDIT_BRAND_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      yield put<EditBrandFailAction>({
        type: EDIT_BRAND_FAIL,
        payload: err.message,
      });
    }
  });
}
export default function* saga() {
  yield fork(getAllBrands);
  yield fork(editBrand);
}
